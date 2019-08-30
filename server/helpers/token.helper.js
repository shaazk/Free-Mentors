import jwt from "jsonwebtoken";

export const genToken = (email) => {
    return jwt.sign({email: email}, process.env.KEY);
}