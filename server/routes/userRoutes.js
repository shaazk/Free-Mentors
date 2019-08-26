import express from 'express';
import usersignup from '../controllers/signupController';
import userlogin from '../controllers/loginController';
import viewmentors from '../controllers/viewAllMentorsController';

const router = express.Router();

router.post('/api/v1/signup', usersignup.createUser);
router.post('/api/v1/login', userlogin.loginAccount);
router.get('/api/v1/allMentors', viewmentors.getAllMentors)


export default router;