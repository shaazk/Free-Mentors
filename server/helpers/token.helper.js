import jwt from "jsonwebtoken";

const genToken = (email, role) => jwt.sign({ email, role }, process.env.KEY);
export default genToken;
