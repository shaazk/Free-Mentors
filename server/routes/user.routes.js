import express from "express";

import validate from "../middleware/validation.middleware";
import { authenticate, hashPassword, isEmailUsed } from "../middleware/user.middleware";
import verifyToken from "../middleware/token.middleware";
import userController from "../controllers/user.controller";
import sessionController from "../controllers/sessionController";


const router = express.Router();


/* mentee */
router.post("/auth/signup", validate, isEmailUsed, hashPassword, userController.signup);
router.post("/auth/signin", validate, authenticate, userController.signin);

router.get("/mentors", verifyToken, userController.getAllMentors);
router.get("/mentors/:mentorId", verifyToken, userController.getSpecificMentor);
router.post("/sessions", verifyToken, sessionController.createSession);
router.get("/sessions", verifyToken, sessionController.getAllSessions);

/* Admin and mentor */
router.get("/mentees", verifyToken, userController.getAllMentees);
router.get("/mentee/:menteeId", userController.getSpecificMentee);

/* Admin */
router.patch("/user/:userId", verifyToken, userController.updateUser);


/* mentor */
router.patch("/sessions/:sessionId/accept", verifyToken, sessionController.acceptSession);
router.patch("/sessions/:sessionId/reject", verifyToken, sessionController.declineSession);


export default router;
