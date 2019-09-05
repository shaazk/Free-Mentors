import { sessions } from "../db/data";
import Session from "../models/session";

const sessionController = {
  createSession: (req, res) => {
    const session = new Session(sessions.length + 1,
      req.body.mentorId, req.user.id, req.body.questions, req.user.email);

    sessions.push(session);
    return res.status(201).send({
      status: 201,
      message: "session created",
      data: session,
    });
  },
  getAllSessions: (req, res) => {
    res.status(200).send({
      success: true,
      message: "sessions found",
      data: sessions,
    });
  },
  acceptSession: (req, res) => {
    if (req.user.role === "mentor") {
      const index = sessions
        .findIndex((session) => session.userId.toString() === req.params.userId);
      if (index > -1) {
        sessions[index].status = "accepted";
        return res.status(200).json({
          status: 200,
          data: sessions[index],
        });
      }
      return res.status(404).json({
        status: 404,
        data: {
          message: "User not found",
        },
      });
    }
    return res.status(400).json({
      status: 401,
      data: {
        message: "Unauthorised",
      },
    });
  },
  declineSession: (req, res) => {
    if (req.user.role === "mentor") {
      const index = sessions
        .findIndex((session) => session.userId.toString() === req.params.userId);
      if (index > -1) {
        sessions[index].status = "rejected";
        return res.status(200).json({
          status: 200,
          data: sessions[index],
        });
      }
      return res.status(404).json({
        status: 404,
        data: {
          message: "User not found",
        },
      });
    }
    return res.status(400).json({
      status: 401,
      data: {
        message: "Unauthorised",
      },
    });
  },


};
export default sessionController;
