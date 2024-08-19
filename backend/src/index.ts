import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*
// Detailed CORS configuration with logging
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS request');
    res.sendStatus(200);
  } else {
    next();
  }
});
*/

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on localhost:5000');
});
