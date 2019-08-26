import db from '../db/db';

class userLogin {

    loginAccount(req, res) {
        let emailFound;
        let passwordFound

        db.map((user, pass) => {
            if ((user.email == req.params.email) && pass.password == req.params.password) {
                emailFound = user;
                passwordFound = pass;
            }
            if ((emailFound) && (passwordFound)) {
                return res.status(200).send({
                    message: 'user is successfully logged in'
                })
            }
            return res.status(400).send({
                message: 'invalid email or password '
            })

        });


        if (!req.body.email) {
            res.status(400).send({
                message: 'email empty'
            })
        } else if (!password.body.email) {
            res.status(400).send({
                message: 'password empty'
            })
        }

    }
    
}
const userlogin = new userLogin();

export default userlogin;