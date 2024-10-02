import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import mongoose from "mongoose";
import verifyToken from "../middleware/auth";
import bookingSchema, { BookingType } from "../models/book";

const router = express.Router();

// Create a Mongoose model for bookings
const Booking = mongoose.model<BookingType>("Booking", bookingSchema);

// Route to create a new booking
router.post(
  "/create",
  [
    verifyToken, // Ensure the user is authenticated
    check("firstName", "First name is required").not().isEmpty(),
    check("lastName", "Last name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("phoneNumber", "Phone number is required").isLength({ min: 10 }),
    check("adultCount", "Adult count is required").isInt({ min: 1 }),
    check("roomCount", "Room count is required").isInt({ min: 1 }),
    check("checkIn", "Check-in date is required").isISO8601().toDate().withMessage("Check-in must be a valid date"),
    check("checkOut", "Check-out date is required").isISO8601().toDate().withMessage("Check-out must be a valid date")
      .custom((value, { req }) => value > req.body.checkIn).withMessage("Check-out must be after check-in"),
    check("totalCost", "Total cost is required and must be a number").isFloat({ min: 0 }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      adultCount,
      roomCount,
      checkIn,
      checkOut,
      totalCost,
    } = req.body;

    try {
      // Create a new booking instance
      const newBooking = new Booking({
        userId: req.userId, // Extracted from the token in the middleware
        firstName,
        lastName,
        email,
        phoneNumber,
        adultCount,
        roomCount,
        checkIn,
        checkOut,
        totalCost,
      });

      // Save the new booking to the database
      await newBooking.save();

      res.status(201).json({ message: "Booking successfully created", bookingId: newBooking._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Unable to create booking" });
    }
  }
);

// Route to fetch all bookings for the authenticated user
router.get("/my-bookings", verifyToken, async (req: Request, res: Response) => {
  try {
    // Find all bookings for the user making the request
    const bookings = await Booking.find({ userId: req.userId });

    if (!bookings.length) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to fetch bookings" });
  }
});

// Route to log the user out by clearing their token
router.post("/logout", (req: Request, res: Response) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
});

export default router;
