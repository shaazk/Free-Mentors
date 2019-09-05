import User from "../models/user.model";
import { users } from "../db/data";
import genToken from "../helpers/token.helper";

const userController = {
  signin: (req, res) => {
    const gnToken = genToken(req.body.email);
    return res.status(200).send({
      status: 200,
      message: "User is successfully logged in",
      data: {
        token: gnToken,
      },
    });
  },
  signup: (req, res) => {
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
      },
    });
  },
  updateUser: (req, res) => {
    if (req.user.role === "admin") {
      const index = users.findIndex((user) => user.userId.toString() === req.params.userId);
      if (index > -1) {
        users[index].role = "mentor";
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
    return res.status(403).json({
      status: 403,
      data: {
        message: "Unauthorised access",
      },
    });
  },
  getAllMentees: (req, res) => {
    const mentees = users.filter((user) => user.role === "mentee");
    return res.status(200).send({
      status: 200,
      data: mentees,
    });
  },
  getAllMentors: (req, res) => {
    const mentors = users.filter((user) => user.role === "mentor");
    return res.status(200).send({
      status: 200,
      data: mentors,
    });
  },
  getSpecificMentor: (req, res) => {
    const mentor = users.find((user) => user.userId.toString() === req.params.mentorId);
    if (!mentor) {
      return res.status(404).send({
        success: false,
        message: "Mentor does not exist, check your ID",
      });
    }
    return res.status(200).send({
      success: true,
      message: "valid id",
      details: mentor,
    });
  },
  getSpecificMentee: (req, res) => {
    const mentee = users.find((user) => user.userId.toString() === req.params.menteeId);
    if (!mentee) {
      return res.status(404).send({
        success: false,
        message: "Mentee does not exist, check your ID",
      });
    }
    return res.status(200).send({
      success: true,
      message: "valid id",
      details: mentee,
    });
  },
};
export default userController;
