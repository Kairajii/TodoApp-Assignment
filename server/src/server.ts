import express from 'express';
import db from "mongoose";
import router from './routes/routes';
import cors from 'cors';
import {json,urlencoded} from 'body-parser';
const app = express();

app.use(json());
app.use(cors());

app.use(urlencoded({extended:true}))

app.use('/todos',router);

app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
    res.status(500).json({message:err.message});
});

db.connect("mongodb+srv://tusharkaira:tusharkaira123@blog-app.h2gepmu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("databse Connected"));
app.listen(5000);