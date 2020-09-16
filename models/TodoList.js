// Connection to database todoLists.db
const datastore = require('../config/nedb').todoLists;

// Insert resource to database 
// Returns the resource 
const create = async (title, userId) => {
    return await datastore.insert({ title, userId });
}

const readAll = => {

}


module.exports = { 
    create
};