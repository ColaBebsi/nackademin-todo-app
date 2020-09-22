const chai = require("chai");

const database = require("../config/mongodb");
const TodoItem = require("../models/mongodb/TodoItem");

const { expect } = chai;
chai.should();

describe("TodoItem Model", () => {
  before(async () => {
    await database.connect();
  });

  beforeEach(async () => {
    await TodoItem.clear();
  });

  after(async () => {
    await database.disconnect();
  });

  it("should create a todo item", async () => {
    // Arrange
    const todoItem = {
      title: "I'm a llama",
      content: "🦙🦙🦙",
    };

    // Act
    const result = await TodoItem.create(todoItem);

    // Assert
    result.should.be.an("object");
    result.should.have.property("_id");
    result.should.have.property("title");
    result.should.have.property("content");
  });

  it("should get all todo items", async () => {
    // Arrange
    const todoItems = [
      {
        title: "I'm a llama",
        content: "🦙🦙🦙",
      },
      {
        title: "I'm a t-rex",
        content: "🦖🦖",
      },
    ];

    await TodoItem.create(todoItems);

    // Act
    const result = await TodoItem.getAll();

    // Assert
    expect(result).to.be.an("array");
    expect(result.length).to.equal(2);
    expect(result[0]).to.be.an("object");
    expect(result[1].title).to.equals("I'm a t-rex");
  });
  
  it("should get all todo items", async () => {
    // Arrange
    const todoItems = [
      {
        title: "I'm a llama",
        content: "🦙🦙🦙",
      },
      {
        title: "I'm a t-rex",
        content: "🦖🦖",
      },
    ];

    await TodoItem.create(todoItems);

    // Act
    const result = await TodoItem.getAll();

    // Assert
    expect(result).to.be.an("array");
    expect(result.length).to.equal(2);
    expect(result[0]).to.be.an("object");
    expect(result[1].title).to.equals("I'm a t-rex");
  });



});
