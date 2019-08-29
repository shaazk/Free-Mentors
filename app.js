import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/userRoutes';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = 3000;
app.listen(port, () =>{
    console.log(`server running on http://localhost: ${port}`);
    
})
