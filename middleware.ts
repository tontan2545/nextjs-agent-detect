import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const { device } = userAgent(request);

  if (url.pathname === "/server" && device.model === "iPhone")
    return NextResponse.redirect(`${url.origin}/server/iphone`);

  if (url.pathname === "/server/iphone" && device.model !== "iPhone")
    return NextResponse.redirect(`${url.origin}/server`);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
