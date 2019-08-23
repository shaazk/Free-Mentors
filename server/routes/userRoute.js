import express from 'express';
import signup from '../controllers/signup';

const route = express.Router();

route.post('/signup', signup);

export default route;