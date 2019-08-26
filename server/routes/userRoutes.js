import express from 'express';
import usersignup from '../controllers/signupController'
const router = express.Router();

router.post('/api/v1/signup', usersignup.createUser);

export default router;