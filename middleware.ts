import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const { device } = userAgent(request);

  if (url.pathname === "/" && device.model === "iPhone")
    return NextResponse.redirect(`${url.origin}/iphone`);

  if (url.pathname === "/iphone" && device.model !== "iPhone")
    return NextResponse.redirect(`${url.origin}`);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
