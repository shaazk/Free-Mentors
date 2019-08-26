import db from '../db/db';

class userSignup {
    createUser(req, res) {
        const newUser = {
            userId: db.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            bio: req.body.bio,
            occuoation: req.body.occuoation,
            expertise: req.body.email
        }

        return res.status(200).send({
            success: 'true',
            message: 'user created successfully',
            details: newUser
        })
    }

}
const usersignup = new userSignup();
export default usersignup;