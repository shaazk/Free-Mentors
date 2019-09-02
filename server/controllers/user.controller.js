import User from "../models/user.model";
import Session from "../models/session";
import { users, sessions } from "../db/data";
import genToken from "../helpers/token.helper";


export const signin = (req, res) => {
  const gnToken = genToken(req.body.email);

  return res.status(200).send({
    status: 200,
    message: "User is successfully logged in",
    data: {
      token: gnToken,
    },
  });
};

export const signup = (req, res) => {
  const user = new User(users.length + 1, req.body.email, req.body.first_name,
    req.body.last_name, req.body.password, req.body.address, req.body.bio,
    req.body.occupation, req.body.expertise);
  users.push(user);

  const gnToken = genToken(user.email);

  return res.status(201).send({
    status: 201,
    message: "User created successfully",
    data: {
      token: gnToken,
      message: "User created successfully",
    },
  });
};

export const updateUser = (req, res) => {
  if (req.user.role == "admin") {
    const index = users.findIndex((user) => user.userId == req.params.userId);

    // users = users.map(u => {
    //     if (u.userId == req.params.userId) {
    //         u.role = "mentor"
    //     }
    //     return u;
    // });

    if (index > -1) {
      users[index``].role = "mentor";

      return res.status(200).json({
        status: 200,
        data: {
          message: "User account changed to mentor",
        },
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
    status: 400,
    data: {
      message: "Unauthorised",
    },
  });
};

export const getAllMentors = (req, res) => {
  const mentors = users.filter((user) => user.role == "mentor");
  return res.status(200).send({
    status: 200,
    data: mentors,
  });
};

export const getAllMentees = (req, res) => {
  if (req.user.role === "admin" || req.user.role === "mentor") {
    const mentees = users.filter((user) => user.role == "mentee");
    return res.status(200).send({
      status: 200,
      data: mentees,
    });
  }
  return res.status(400).send({
    status: 400,
    message: "Unauthorised user!",

  });
};

export const getSpecificMentor = (req, res) => {
  const mentor = users.find((user) => user.userId == req.params.mentorId);
  if (!mentor) {
    return res.status(400).send({
      success: false,
      message: "invaid id",
    });
  }

  return res.status(200).send({
    success: true,
    message: "valid id",
    details: mentor,
  });
};
export const getSpecificMentee = (req, res) => {
  const mentee = users.find((user) => user.userId == req.params.menteeId);
  if (!mentee) {
    return res.status(400).send({
      success: false,
      message: "invaid id",
    });
  }

  return res.status(200).send({
    success: true,
    message: "valid id",
    details: mentee,
  });
};

export const creatSession = (req, res) => {
  const session = new Session(sessions.length + 1, req.body.mentorId, req.user.id, req.body.questions, req.user.email);
  console.log(session);
  sessions.push(session);
  // console.log(req.body.questions, req.body.mentorId);

  // const size = sessions.length;
  // if (size < sessions.push(session)){
  //     return res.status(201).send({
  //         status: 201,
  //         message: "session created"
  //     });
  // } else{

  // }

  return res.status(201).send({
    status: 201,
    message: "session created",
    data: session,
  });
};

export const getAllSessions = (req, res) => res.status(200).send({
  success: true,
  message: "sessions found",
  data: sessions,
});

export const acceptSession = (req, res) => {
  if (req.user.role == "mentor") {
    const index = sessions.findIndex((session) => session.userId == req.params.userId);

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
};
