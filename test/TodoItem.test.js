// require('../config/database');
// const app = require('../app');
const chai = require('chai');
const { expect } = chai;
const TodoItem = require('../models/TodoItem');

// describe('Create a resource', () => {
//     it('should return an object', async () => {
//         const todoItem = await TodoItem.create({ title: 'Title 1', content: 'Content 1' });
      
//         console.log(todoItem);
//         // expect(typeof todoItem).to.equal('object');

//     })
// })

describe('Get a single resource', function() {
    it('should return the todo item', async function() {
        const id = '5f520d7e490c283134371595';
        
        const todoItem = await TodoItem.findById(id)
        
        console.log(todoItem);
    }).timeout(10000)
})