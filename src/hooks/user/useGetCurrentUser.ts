"use server";
import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";

export const getCurrentUser = async (request: NextRequest) => {
  // Use NextRequest to access cookies
  const accessToken = request.cookies.get("accessToken")?.value;

  if (accessToken) {
    try {
      // Decode JWT token
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    } catch (error) {
      console.error("Failed to decode token", error);
      return null; // Return null if decoding fails
    }
  }

  return null; // Return null if no token is found
};
