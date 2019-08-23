import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import encrypt from  'bcrypt';
import user from '../db/user';
import mentor from '../db/mentor';
import validateSignup from '../helpers/validateSignup';


dotenv.config();

const signup = (req,res) => {
    const { error } = validateSignup.validation(req.body);
    if(error) return res.status(400).send({ status: {Integer: 400}, error:{string: error.message}});
    const { firstName, lastName, email, password, address, bio, occupation,expertise } = req.body;
    const isExistUser = user.find(f => f.email === email);
    const isExistMentor = mentor.find(f => f.email === email);
    const newPassword = encrypt.hashSync(password,10);
    if(!isExistUser || !isExistMentor) {
        const newUser = {
            userId: user.length + 1,
            firstName,
            lastName,
            email,
            password: newPassword,
            address,
            bio,
            occupation,
            expertise,
            isAdmin: false
        }
        const token = jwt.sign({ id: newUser.userId, isAdmin: newUser.isAdmin }, process.env.secretKey);
        user.push(newUser);
        return res.status(201).send({ status:{Integer: 201}, token: token, message: 'Account created successfully' });
    } else {
        return res.status(409).send({ status:{Integer:409}, error: 'Existing account' });
    }
}

export default signup;