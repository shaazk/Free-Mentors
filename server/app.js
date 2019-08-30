import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user.routes';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', router);

export default app;


