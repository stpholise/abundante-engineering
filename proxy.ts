import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log({pathname: pathname }); 

  if (pathname == "/") {
    return NextResponse.rewrite(new URL(`/home`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
