const Datastore = require('nedb-promises');

let datastore = {};

datastore.todoItems = Datastore.create('./config/database/todoItems.db');
datastore.users = Datastore.create('./config/database/users.db');
datastore.todoLists = Datastore.create('./config/database/todoLists.db');

datastore.todoItems.load();
datastore.users.load();
datastore.todoLists.load();

module.exports = datastore;