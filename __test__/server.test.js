const { TestWatcher } = require('jest')
const request = require('supertest')
const app = require('../src/server/index')

describe('Test the root path', () =>{
    test('It should response the Get method', done =>{
        request(app)
        .get('/')
        .then(response =>{
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})
