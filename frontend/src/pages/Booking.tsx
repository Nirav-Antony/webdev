import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
//Simport CounterButton from "../components/CounterButton";
//import { Unstable_NumberInput as NumberInput } from '@mui/base';
import PersonCounter from "../components/PersonCounter";
import RoomCounter from "../components/RoomCounter";



export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  adultCount: number;
  roomCount: number;
};

const BookRoom = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>();

  const mutation = useMutation(apiClient.createRoomBooking, {
    onSuccess: async () => {
      showToast({ message: "Booking Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("myBookings");
      navigate("/my-bookings");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 top-10 gap-5 rounded-lg border border-black border-slate-300 p-5"
    >
      <span className="text-3xl text-amber-500 font-bold">Confirm Your Details</span>
      <div className="grid grid-cols-2 gap-6">
        <label className="text-amber-700 text-sm font-bold flex-1">
          First Name
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 bg-gray-200 font-normal"
            type="text"
            readOnly
            disabled
            {...register("firstName")}
          />
        </label>
        <label className="text-amber-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 bg-gray-200 font-normal"
            type="text"
            readOnly
            disabled
            {...register("lastName")}
          />
        </label>
        <label className="text-amber-700 text-sm font-bold flex-1">
          Email
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 bg-gray-200 font-normal"
            type="text"
            readOnly
            disabled
            {...register("email")}
          />
        </label>
        <label className="text-amber-700 text-sm font-bold flex-1">
          Phone Number
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 font-normal"
            type="text"
            {...register("phoneNumber", { required: "This field is required" })}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </label>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <label className="text-amber-700 text-sm font-bold flex-1">
          Check-in Date
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 font-normal"
            type="date"
            {...register("checkIn", { required: "This field is required" })}
          />
          {errors.checkIn && (
            <span className="text-red-500">{errors.checkIn.message}</span>
          )}
        </label>
        <label className="text-amber-700 text-sm font-bold flex-1">
          Check-out Date
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-amber-700 font-normal"
            type="date"
            {...register("checkOut", { required: "This field is required" })}
          />
          {errors.checkOut && (
            <span className="text-red-500">{errors.checkOut.message}</span>
          )}
        </label>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Controller
          name="adultCount"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <PersonCounter value={field.value} onChange={field.onChange} />
          )}
        />
        <Controller
          name="roomCount"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <RoomCounter value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Your Price Summary</h2>
        <div className="bg-blue-200 p-4 rounded-md">
          <div className="font-semibold text-lg">Total Cost:</div>
          <div className="text-xs">Includes taxes and charges</div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Payment Details</h3>
        {/* Payment details fields can be added here */}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-md disabled:bg-gray-500"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default BookRoom;
