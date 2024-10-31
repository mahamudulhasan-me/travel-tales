import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./hooks/user/useGetCurrentUser";
import { IUser } from "./type/user.type";

// Define protected routes
const protectedRoutes = ["/", "/profile", "/dashboard"];

// Define role-based routes
const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/, /^\/dashboard/], // Admin can access /dashboard
};

// Middleware function to protect routes
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route being accessed is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Get the current user based on the request
  const user = (await getCurrentUser(request)) as IUser;

  // If user is not authenticated and trying to access a protected route
  if (!user && isProtectedRoute) {
    console.log("User not authenticated, redirecting to /explore");
    return NextResponse.redirect(new URL("/explore", request.url));
  }

  // If user is authenticated
  if (user) {
    // Redirect authenticated users from /explore to home page
    if (pathname === "/explore") {
      console.log("User is authenticated, redirecting to home");
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Admin check for accessing /dashboard
    if (pathname.startsWith("/dashboard")) {
      if (user.role !== "admin") {
        console.log("User is not admin, redirecting to home");
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    // Allow the user to continue to the requested page if authenticated
    return NextResponse.next();
  }

  return NextResponse.next(); // Fallback case
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/", "/profile/:path*", "/admin/:path*", "/dashboard", "/explore"],
};
