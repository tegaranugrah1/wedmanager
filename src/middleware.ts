import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "./lib/session";

const publicRoutes = ["/", "/login", "/signup"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = request.cookies.get("session")?.value;
  const session = cookie ? await verifySession(cookie) : null;

  // Protect private routes
  if (!isPublicRoute && !session) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Redirect authenticated users away from auth pages
  if (isPublicRoute && session && path !== "/") {
    if (session.role === "SUPERADMIN") {
      return NextResponse.redirect(new URL("/superadmin", request.nextUrl));
    } else if (session.tenantSlug) {
      return NextResponse.redirect(new URL(`/app/${session.tenantSlug}`, request.nextUrl));
    }
  }

  // Role Routing protection
  if (path.startsWith("/superadmin") && session?.role !== "SUPERADMIN") {
    return NextResponse.redirect(new URL("/", request.nextUrl)); // Unauthorized
  }

  if (path.startsWith("/app/")) {
    const pathSlug = path.split("/")[2];
    if (session?.role !== "SUPERADMIN" && session?.tenantSlug !== pathSlug) {
      // Prevent cross-tenant access
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
