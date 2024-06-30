import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function correctSecretProvided(request: NextRequest) {
  const requiredSecret = process.env.HASURA_ACTION_SECRET_ENV;
  const providedSecret = request.headers.get("hasura_action_secret");
  return requiredSecret === providedSecret;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (!correctSecretProvided(request)) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Not authorized" }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }
}

export const config = {
  matcher: [
    "/api/hasura/actions/mutations/(.*)",
    "/api/hasura/actions/queries/(.*)",
  ],
};
