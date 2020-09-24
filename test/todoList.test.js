/* const chai = require("chai");
const chaiHttp = require("chai-http");

const { connect, disconnect } = require("../config/mongodb");
const app = require("../app");

const TodoItem = require("../models/mongodb/TodoItem");
const User = require("../models/mongodb/User");
const TodoList = require("../models/mongodb/TodoList");

const { expect } = chai;
chai.should();
chai.use(chaiHttp);

describe("Integration test - TodoList", () => {
  before("Connect to database before running the test", async function () {
    await connect();
  });

  beforeEach(
    "Clear database, create/authenticate user and create before each tests",
    async function () {
      await TodoItem.clear();
      await User.clear();
      await TodoList.clear();

      const user = await User.signup({
        email: "admin@admin.com",
        password: "admin",
        role: "admin",
      });

      // Assign user object to this user
      this.user = user;

      const authUser = await User.login(user.email, "admin");

      // Assign authenticated user object to this token
      this.token = authUser;

      const list = await TodoList.createList({
        title: "Todo List One",
        user: user._id,
      });

      // Assign list object to this list
      this.list = list;
    }
  );

  after("Disconnect from database after running the test", async function () {
    await disconnect();
  });

  it("should create a new todo list", async function () {
    await chai
      .request(app)
      .post("/todolists")
      .set("Content-Type", "application/json")
      .set("authorization", `Bearer ${this.token}`)
      .send({ title: "Todo List Created" })
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
      });
  });

  it("should get all todo lists", async function () {
    const result = await chai
      .request(app)
      .get("/todolists")
      .set("Content-Type", "application/json")
      .set("authorization", `Bearer ${this.token}`);

    result.should.have.status(200);
    expect(result.body.length).to.equal(1);
    expect(result.body[0]).to.have.all.keys(
      "_id",
      "user",
      "title",
      "items",
      "createdAt",
      "updatedAt"
    );
  });

  it("should update a todo list", async function () {
    await chai
      .request(app)
      .patch(`/todolists/${this.list._id}`)
      .set("Content-Type", "application/json")
      .set("authorization", `Bearer ${this.token}`)
      .send({ title: "Todo List One Updated" })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.title).to.equal("Todo List One Updated");
      });
  });
});
 */