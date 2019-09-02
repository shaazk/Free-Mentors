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
  getAllMentors, signin, signup, updateUser, getAllMentees, getSpecificMentor, getSpecificMentee, creatSession,
  getAllSessions,
} from "../controllers/user.controller";


const router = express.Router();


/* mentee */
router.post("/auth/signup", validate, isEmailUsed, hashPassword, signup);
router.post("/auth/signin", validate, authanticate, signin);

router.get("/mentors", verifyToken, getAllMentors);
router.get("/mentors/:mentorId", verifyToken, getSpecificMentor);
router.post("/sessions", verifyToken, creatSession);
router.get("/sessions", verifyToken, getAllSessions);

// router.post('/sessions/:sessionId/review', verifyToken, createReview);


/* Admin and mentor */
router.get("/mentees", verifyToken, getAllMentees);
router.get("/mentee/:menteeId", getSpecificMentee);

/* Admin */
router.patch("/user/:userId", verifyToken, updateUser);
// router.delete('/sessions/:sessionId/review', verifyToken, deleteReview);


/* mentor */
// router.patch('/sessions/:sessionId/accept', verifyToken, acceptSession );
// router.patch('/sessions/:sessionId/reject', verifyToken, declineSession );


export default router;
