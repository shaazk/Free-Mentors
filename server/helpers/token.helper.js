import jwt from "jsonwebtoken";

const genToken = (email) => jwt.sign({ email: email }, process.env.KEY);
export default genToken;
