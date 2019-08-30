import jwt from "jsonwebtoken";
import { users } from "../db/data";

export function verifyToken (req, res, next) {
    const token = req.header('token');

    if(!token) return res.status(401).send({
        'status': 401,
        'message': 'Please sign in first.'
    });

    try {
        const verified = jwt.verify(token, process.env.KEY); // Verify provided user token if is still loged in
        const user = users.find(user => user.email == verified.email);
        req.user = {
            'token': verified,
            'email': verified.email,
            'role': user.role
        }; // Store user token and role for leter uses
        
        next(); // Let continue
    } catch (error) {
        res.status(400).send({
            'status': 400,
            'message': 'Invalid token!'
        });
    }
}