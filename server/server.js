import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/user.route';
import postRoute from './routes/post.route';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/images', express.static('uploads/'));



app.listen(5000, () => { console.log("Server is running at at http://localhost:5000") }) 