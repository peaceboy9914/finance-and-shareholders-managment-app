/* eslint-disable no-undef */
import express from 'express';
import {config} from 'dotenv'
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import shareRoutes from './routes/shareRoutes.js';
import connectToDatabase from './config/database.js';
import cors from 'cors';
const app = express();
app.use(cors());
config('.env')
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRoutes);
app.use('/share', shareRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
    connectToDatabase();
});

//db_password= xJjb0Sv3OZ5ax5J6