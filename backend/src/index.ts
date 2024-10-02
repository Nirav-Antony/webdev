import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import bookingsRoutes from './routes/bookings'; // Include the bookings route
import cookieParser from 'cookie-parser';
import path from 'path';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const app = express();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));


// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingsRoutes); // Register the bookings route


app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});