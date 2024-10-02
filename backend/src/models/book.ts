
import mongoose from "mongoose";

export type BookingType = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    adultCount: number;
    roomCount: number;
    checkIn: Date;
    checkOut: Date;
    totalCost: number;
  };


const bookingSchema = new mongoose.Schema<BookingType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  adultCount: { type: Number, required: true },
  roomCount: { type: Number, required: true },
  checkIn: { 
    type: Date, 
    required: true, 
    validate: {
      validator: function(this: BookingType, v: Date) {
        return v < this.checkOut;
      },
      message: "Check-in date must be before the check-out date"
    }
  },
  checkOut: { type: Date, required: true },
  totalCost: { type: Number, required: true },
});


export default bookingSchema;