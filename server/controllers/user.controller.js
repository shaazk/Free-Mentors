import User from "../models/user.model";
import users from "../db/data";
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
  if (req.user.role === "admin") {
    const index = users.findIndex((user) => user.userId === req.params.userId);
    users[index].role = "mentor";

    return res.status(200).json({
      status: 200,
      data: {
        message: "User account changed to mentor",
      },
    });
  }
  return 0;
};

export const getAllMentors = (req, res) => {
  const mentors = users.filter((user) => user.role === "mentor");
  return res.status(200).send({
    status: 200,
    data: mentors,
  });
};
