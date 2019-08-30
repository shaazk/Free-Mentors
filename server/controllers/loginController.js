/* import db from '../db/db';

class userLogin {

    loginAccount(req, res) {
        let emailFound;
        let indexFound;

        db.map((user, index) => {
            if (user.email == req.body.email && user.password == req.body.password) {
                emailFound = user;
                indexFound = index;
            }

        });


        if (!req.body.email) {
            res.status(400).send({
                message: 'email empty'
            })
        } else if (!req.body.email) {
            res.status(400).send({
                message: 'password empty'
            })
        }

        if (emailFound) {
                return res.status(200).send({
                    message: 'user is successfully logged in'
                })
            }
            return res.status(400).send({
                message: 'invalid email or password '
            })

    }
    
}
const userlogin = new userLogin();

export default userlogin; */