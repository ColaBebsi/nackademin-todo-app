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

describe("Integration test - TodoList Model", () => {
  before("Connect to database before running the test", async () => {
    await connect();
  });

  beforeEach("Clear database before each tests", async () => {
    await TodoItem.clear();
    await User.clear();
  });

  after("Disconnect from database after running the test", async () => {
    await disconnect();
  });

  it("should create a todo list", )

});
 */