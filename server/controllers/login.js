import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import encrypt from  'bcrypt';
import mentor from '../db/mentor';
import mentee from '../db/mentee';

dotenv.congig();

const login = (req,res) => {
    const { email, password } = req.body;
    const isExistMentee = mentee.find(f => f.email === email);
    const isExistMentor = mentor.find(f => f.email === email);
    const menteePassword = encrypt.compareSync(password,isExistMentee.password);
    const mentorPassword = encrypt.compareSync(password,isExistMentor.password);
    if(isExistMentee){
       const token = jwt.sign({ id: isExistMentee.menteeId, email: isExistMentee.email, admin: isExistMentee.isAdmin });
        return r
    }

}