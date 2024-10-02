import { BookingFormData } from './pages/Booking';
import { RegisterFormData } from './pages/Register';
import { SignInFormData } from './pages/SignIn';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json(); // Read the response body here

  if (!response.ok) {
    throw new Error(responseBody.message); // Use the read response body here
  }

  return responseBody; // Return the read response body
};

export const signIn = async(formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message); // Use the read response body here
  }

  return body;
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};


export const createRoomBooking = async (formData: BookingFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `Server Error (${response.status}): ${errorData.message || "Unknown error"}`
      );
      throw new Error(errorData.message || "Error booking room");
    }

    return await response.json(); // Return response data if needed
  } catch (error) {
    console.error("Network or other error in createRoomBooking:", error);
    throw error; // Re-throw the error after logging it
  }
};
