import chai from 'chai';
import chaiHttp from 'chai-http';
import app from "../app";

chai.use(chaiHttp);

describe('Users: ', () => {
    const data = {
        first_name: "kk",
        last_name: "kk",
        address: "kk",
        email: "kk@gmail.com", 
        password: "077777777", 
        bio: "kk",
        occupation: "kk",
        expertise: "kk"
        
    };
    it('should create new user.', (done) => {
        chai.request(app).post('/api/v1/auth/signup').send(data).end((_err, res) => {
            chai.expect(res.status).to.eq(201);
            done();
        });
    });
    
    it('should return error if all required fields are not supplied', (done) => {
        const userData = {
            first_name: "kk",
            last_name: "kk",
            address: "Kk",
            password: "077777777", 
            bio: "kk",
            occupation: "kk",
            expertise: "kkt"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData).end((err, res) => {
            chai.expect(res.status).to.eq(400);
            done();
        });
    });

    it('should return error if email already exists', (done) => {
        chai.request(app).post('/api/v1/auth/signup').send(data).end((err, res) => {
            chai.expect(res.status).to.eq(409);
            done();
        });
    });

    it('should return a token and user details', () => {
        chai.request(app).post('/api/v1/auth/signin').send({
            email: "kk@gmail.com", 
            password: "077777777"
        }).then((res) => {
            chai.expect(res.status).to.eq(200);
        }).catch((error) => {
            throw error;
        });
    });
});