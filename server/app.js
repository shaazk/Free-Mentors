import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
const app = express();

app.use(bodyParser.urlencoded({extended: false} ));
app.use(bodyParser.json());

app.use('/api/v1/auth/', userRoute);

const port = process.env.PORT || 1997;

app.listen(port,()=>{
    console.log(`connected on ${port}`);
    
})
