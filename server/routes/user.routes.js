import express from "express";
/* import usersignup from '../controllers/signupController';
import userlogin from '../controllers/loginController';
import viewmentors from '../controllers/viewAllMentorsController';
import viewSpecificMentor from '../controllers/specificMentorController';
import Admin from '../controllers/adminController'; */

import validate from "../middleware/validation.middleware";
import { authanticate, hashPassword, isEmailUsed } from "../middleware/user.middleware";
import verifyToken from "../middleware/token.middleware";
import {
  getAllMentors, signin, signup, updateUser,
} from "../controllers/user.controller";


const router = express.Router();

router.post("/auth/signup", validate, isEmailUsed, hashPassword, signup);
router.post("/auth/signin", validate, authanticate, signin);

router.get("/mentors", verifyToken, getAllMentors);
// router.get('/specificMentor/:mentorId', verifyToken, viewSpecificMentor.getMentor);


/* Admin and mentor */
// router.get('/allMentees', Admin.getMentees);
router.patch("/user/:userId", verifyToken, updateUser);

// router.get('/api/v1/specificMentee/:menteeId', Admin.getMenteeById);

/* Admin */
// router.get('/allUsers', Admin.getAllUsers);

export default router;
