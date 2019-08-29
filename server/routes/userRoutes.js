import express from 'express';
import usersignup from '../controllers/signupController';
import userlogin from '../controllers/loginController';
import viewmentors from '../controllers/viewAllMentorsController';
import viewSpecificMentor from '../controllers/specificMentorController';
import Admin from '../controllers/adminController';


const router = express.Router();

router.post('/api/v1/signup', usersignup.createUser);
router.post('/api/v1/login', userlogin.loginAccount);
router.get('/api/v1/allMentors', viewmentors.getAllMentors);
router.get('/api/v1/specificMentor/:mentorId', viewSpecificMentor.getMentor);
router.get('/api/v1/allMentees', Admin.getMentees);
router.patch('/api/v1/changeMenteetomentor/:menteeId', Admin.updateMentee);
router.get('/api/v1/specificMentee/:menteeId', Admin.getMenteeById);
router.get('/api/v1/allUsers', Admin.getAllUsers);

export default router;