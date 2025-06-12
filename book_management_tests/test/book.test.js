const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

console.log('chai.request type:', typeof chai.request);

const expect = chai.expect;
const app = require('../app');

describe('Books API', () => {
  it('GET /books should return array', (done) => {
    chai.request(app)
      .get('/books')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /books should create a book', (done) => {
    chai.request(app)
      .post('/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        year: 2020,
        pages: 123
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        expect(res.body.title).to.equal('Test Book');
        done();
      });
  });
});
