const chai = require("chai");
const database = require("../config/mongodb");
const TodoItem = require("../models/mongodb/TodoItem");

const { expect } = chai;
chai.should();

describe("Unit Test - TodoItem", function () {
  before(async function () {
    await database.connect();
  });

  beforeEach(async function () {
    await TodoItem.clear();
  });

  after(async function () {
    await database.disconnect();
  });

  it("should create a todo item", async function () {
    // Arrange
    const item = {
      title: "I'm a llama",
      content: "🦙🦙🦙",
    };

    // Act
    const result = await TodoItem.create(item);

    // Assert
    result.should.be.an("object");
    result.should.have.property("_id");
    result.should.have.property("title");
    result.should.have.property("content");
  });

  it("should get all todo items", async () => {
    // Arrange
    const items = [
      {
        title: "I'm a llama",
        content: "🦙🦙🦙",
      },
      {
        title: "I'm a t-rex",
        content: "🦖🦖",
      },
    ];

    await TodoItem.create(items);

    // Act
    const result = await TodoItem.getAll();

    // Assert
    expect(result).to.be.an("array");
    expect(result.length).to.equal(2);
    expect(result[0]).to.be.an("object");
    expect(result[1].title).to.equals("I'm a t-rex");
  });

  it("should update a todo item", async () => {
    // Arrange
    const item = {
      title: "I'm a hobo",
      content: "🎅🎅🎅",
    };

    const itemUpdated = {
      title: "I'm a hobo santa",
      content: "🎅🎅🎅",
    };

    const createdItem = await TodoItem.create(item);

    // Act
    const result = await TodoItem.update(createdItem._id, itemUpdated);

    // Assert
    expect(result).to.be.an("object");
    expect(result.title).to.equals("I'm a hobo santa");
  });

  it("should delete a todo item", async () => {
    // Arrange
    const item = {
      title: "Ninja cat",
      content: "🐱‍👤🐱‍👤🐱‍👤",
    };

    const createdItem = await TodoItem.create(item);

    // Act
    const result = await TodoItem.delete(createdItem._id);

    // Assert
    expect(result.deletedCount).to.equals(1);
    expect(result.ok).to.equals(1);

  });

  it("should delete all todo items", async () => {
    // Arrange
    const items = [
      {
        title: "I'm a llama",
        content: "🦙🦙🦙",
      },
      {
        title: "I'm a t-rex",
        content: "🦖🦖",
      },
    ];

    await TodoItem.create(items);

    // Act
    const result = await TodoItem.clear();

    // Assert
    expect(result.deletedCount).to.equals(2);
    expect(result.n).to.equals(2);
    expect(result.ok).to.equals(1);

  })
});
