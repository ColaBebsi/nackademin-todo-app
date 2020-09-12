const conn = require('../config/database');
process.env.NODE_ENV = 'test';

this.use(conn);
const expect = require('chai').expect;
const TodoItem = require('../models/TodoItem');
const { use } = require('chai');
// const request = require('supertest');

// const app = require('../app');

// describe('POST /todoitems', () => {
//     before((done) => {
//         conn.connect()
//             .then(() => done())
//             .catch((err) => done(err));
//     })

//     after((done) => {
//         conn.disconnect()
//             .then(() => done())
//             .catch((err) => done(err));
//     })

//     it('OK, creating a new todo works', (done) => {
//         request(app).post('/todoitems')
//             .send({ title: 'Todo Item 1', content: 'Content 1' })
//             .then((res) => {
//                 const body = res.body;
//                 console.log(body);
//                 expect(body).to.contain.property('_id');
//                 expect(body).to.contain.property('title');
//                 expect(body).to.contain.property('content');
//                 expect(body).to.contain.property('done');
//                 done();
//             })
//             .catch((err) => done(err));
//     })
// })





describe('POST /todoitems', function() {

    //     before((done) => {
    //     conn.connect()
    //         .then(() => done())
    //         .catch((err) => done(err));
    // })

    // after((done) => {
    //     conn.disconnect()
    //         .then(() => done())
    //         .catch((err) => done(err));
    // })
    it('should create a todo', async function() {
        // Arrange
        const todoItem = {
            title: 'Todo Item 1', 
            content: 'Content 1'
        };

        // Act
        const result = await TodoItem.create(todoItem);

        // Assert
        expect(result).to.contain.property('_id');
        expect(result).to.contain.property('title');
        expect(result).to.contain.property('content');
        expect(result).to.contain.property('done');
    })
})

/* describe('Get a single resource', function() {
    it('should return the todo item', async function() {
        const id = '5f520e8b470caf32b8e51439';
        
        try {
            // Do not use findById!!!
            const todoItem = await TodoItem.findOne({ _id: id })
            console.log(todoItem);
            
        } catch (error) {
            console.log(error);
        }
    })
}) */