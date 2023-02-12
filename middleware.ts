// pages/\_middleware.ts
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  const confirmedUrl = ["/", "/main", "/works", "/detail"];

  if (!confirmedUrl.includes(pathname) && !PUBLIC_FILE.test(pathname)) {
    console.log({ pathname });
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(`${url}`);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
