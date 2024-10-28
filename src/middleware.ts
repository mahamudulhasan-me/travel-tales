import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./hooks/user/useGetCurrentUser";

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
  const user = await getCurrentUser(request); // Pass the request to the function

  // Redirect to /explore if the user is not authenticated and trying to access a protected route
  if (!user && isProtectedRoute) {
    return NextResponse.redirect(new URL("/explore", request.url));
  }

  // If a user exists (authenticated), check for role-based access
  if (user) {
    // Check if the user is trying to access the /dashboard route
    if (pathname.startsWith("/dashboard")) {
      // If the user is not an admin, redirect to the home page
      if (user.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }

    // Allow the user to continue to the requested page if all checks pass
    return NextResponse.next();
  }

  return NextResponse.next(); // Fallback case, just continue
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/", "/profile/:path*", "/admin/:path*", "/dashboard"], // Add /dashboard route
};
