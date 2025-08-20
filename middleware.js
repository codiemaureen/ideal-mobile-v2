import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const res = NextResponse.next();

  // Read session token (JWT) on the Edge
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName:
      process.env.NODE_ENV === "production"
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
  });
  const isAuthenticated = !!token;

  // Protect specific routes
  const protectedPaths = [
    "/customer-address",
    "/payment-method",
    "/place-order",
    "/profile",
    "/user",
    "/order",
    "/admin",
  ];
  const pathname = req.nextUrl.pathname;
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Ensure a sessionCartId cookie exists
  const cartId = req.cookies.get("sessionCartId");
  if (!cartId) {
    const newCartId = crypto.randomUUID();
    res.cookies.set("sessionCartId", newCartId, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
  }

  return res;
}

export const config = {
  matcher: [
    "/",
    "/cart",
    "/checkout",
    "/account/:path*",
    "/customer-address",
    "/payment-method",
    "/place-order",
    "/profile",
    "/user",
    "/order",
    "/admin",
  ],
};
