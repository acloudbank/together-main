import type { NextApiRequest } from "next";

import { getHasuraClient } from "./getHasuraClient";

type GetHasuraAdminClientArgs = {
  request?: NextApiRequest;
  headers?: Record<string, string>;
};

export function getHasuraAdminClient(
  args?: GetHasuraAdminClientArgs
): ReturnType<typeof getHasuraClient> {
  return getHasuraClient({
    request: args?.request,
    headers: args?.headers,
    asAdmin: true,
  });
}
