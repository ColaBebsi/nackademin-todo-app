const { expect } = require('chai')
const should = require('chai').should();
const TodoItem = require('../models/TodoItem');


describe('TodoItem Model', () => {
    beforeEach(() => {
        TodoItem.deleteAll();
    });

    it('should create a todo item', async () => {
        // Arrange
        const todoItem = {
            title: "I'm a llama",
            content: "🦙🦙🦙"
        };

        // Act
        const result = await TodoItem.create(todoItem);

        // Assert
        result.should.be.an('object');
        result.should.have.property('_id');
        result.should.have.property('title');
        result.should.have.property('content');
    });

    it('should read a todo item', async () => {
        // Arrange
        const todoItem = {
            title: "I'm a llama",
            content: "🦙🦙🦙"
        };

        const newTodo = await TodoItem.create(todoItem);

        // Act
        const result = await TodoItem.read(newTodo._id);

        // Assert
        expect(result).to.be.a('object');
        expect(result).to.have.keys(['_id', 'title', 'content']);
    });

    it('should update a todo item', async () => {
        // Arrange
        const todoItem = {
            title: "I'm a llama",
            content: "🦙🦙🦙"
        };

        const updateTodoItem = {
            title: "I'm a llama UPDATED",
            content: "🦙🦙🦙 UPDATED"
        };

        const newTodo = await TodoItem.create(todoItem);

        // Act
        const result = await TodoItem.update(newTodo._id, updateTodoItem);

        // Assert
        result.should.be.an('object');
        result.should.have.property('_id');
        result.should.have.property('title');
        result.should.have.property('content');
    });

    it('should delete a todo item', async () => {
        // Arrange
        const todoItem = {
            title: "I'm a llama",
            content: "🦙🦙🦙"
        };

        const newTodo = await TodoItem.create(todoItem);

        // Act
        const result = await TodoItem.delete(newTodo._id);

        // Assert
        expect(result).to.equal(1);
    });
});
