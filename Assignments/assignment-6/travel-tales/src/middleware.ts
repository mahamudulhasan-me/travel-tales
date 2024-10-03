import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

// Define protected routes
const protectedRoutes = ["/", "/profile"];

type Role = keyof typeof roleBasedRoutes;

// Define role-based routes
const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

// Simulated function to check if a user is logged in (replace this with your actual logic)

// Middleware function to protect routes
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route being accessed is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Simulate checking if a user is authenticated
  const user = await getCurrentUser();

  // Redirect to /explore if the user is not authenticated and trying to access a protected route
  if (!user && isProtectedRoute) {
    return NextResponse.redirect(new URL("/explore", request.url));
  }

  // If a user exists (authenticated), allow them to continue to the requested page
  if (user) {
    return NextResponse.next(); // Proceed to the next middleware or the requested page
  }

  return NextResponse.next(); // Fallback case, just continue
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/", "/profile/:path*", "/admin/:path*"], // Protect these routes
};
