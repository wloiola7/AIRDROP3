import { NextResponse, type NextRequest } from "next/server";

export function proxy(_request: NextRequest) {
  return new NextResponse("This service has been permanently disabled.", {
    status: 410,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" }
  });
}

export const config = {
  matcher: [
    "/rewards/:path*",
    "/airdrop-history/:path*",
    "/leaderboard/:path*",
    "/api/stats",
    "/api/wallet/:path*"
  ]
};
