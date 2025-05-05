import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { getToken } from "./utils/cookies";
import { verifyTokenJose } from "./utils/jwt";

const publicRoutes = new Set([
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
]);

const getTokenFromCookies = (req: NextRequest) => {
  const token = req.cookies.get("token");
  return token ? token.value : null;
};

export async function adminMiddleware(req: NextRequest) {
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (!isLoginPage) {
    const token = getTokenFromCookies(req);

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    const session = await verifyTokenJose(token);

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export async function apiMiddleware(req: NextRequest) {
  return NextResponse.next();
}

export async function authMiddleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (publicRoutes.has(path)) {
    return NextResponse.next();
  }

  const token = getTokenFromCookies(req);
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  const session = await verifyTokenJose(token);
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (session?.user?._id && (path === "/login" || path === "/")) {
    const url = req.nextUrl.clone();
    url.pathname = "/catalogo/productos";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const path = req.nextUrl.pathname;

  if (
    path.startsWith("/_next/static") ||
    path.startsWith("/_next/image") ||
    path === "/favicon.ico" ||
    path === "/logo.png" ||
    path.endsWith(".xml") ||
    path === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  if (path.startsWith("/api")) {
    return apiMiddleware(req);
  }

  if (path.startsWith("/admin")) {
    return adminMiddleware(req);
  }

  return authMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png|.*\\.xml|robots.txt|sitemap.xml|sitemap-\\d+.xml|public|images|static|fonts).*)",
  ],
};
