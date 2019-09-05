import jwt from "jsonwebtoken";

const genToken = (Email) => jwt.sign({ email: Email }, process.env.KEY);
export default genToken;
