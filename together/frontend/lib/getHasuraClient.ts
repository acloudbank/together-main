import type { NextApiRequest } from "next";

import { pick, reduce, toLower } from "lodash";

import { AppError } from "../errors";

import { HasuraClient } from "./HasuraClient";
import { Headers } from "./types";

type GetHasuraClientArgs = {
  request?: NextApiRequest;
  asAdmin?: boolean;
  headers?: Record<string, string>;
  // Optional, taken from env by default
  hasuraGraphqlUrl?: string;
  adminSecret?: string;
};

/**
 * If those headers are present then forward them to any requests
 * made by this hasura client.
 */
const FORWARD_HEADERS = [
  "authorization",
  "x-hasura-admin-secret",
  "x-hasura-role",
  "x-hasura-user-id",
];

export function getHasuraClient(args?: GetHasuraClientArgs): HasuraClient {
  const endpoint = args?.hasuraGraphqlUrl || process.env.NEXT_PUBLIC_API_URL;

  if (!endpoint) {
    throw new AppError("No Hasura Graphql Url specified");
  }

  if (args?.asAdmin && !process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    throw new AppError("No Hasura admin secret specified");
  }

  const lowercasedHeaders: Record<string, string> = reduce(
    {
      ...(args?.request?.headers ?? {}),
      // headers are passed in body.session_variables when coming from hasura action
      ...(args?.request?.body.session_variables ?? {}),
    },
    (acc, value, key) => ({
      ...acc,
      [toLower(key)]: value,
    }),
    {}
  );

  const headers: Headers = {
    // TODO: Add B3 tracing headers from request or create new ones.
    ...pick(lowercasedHeaders, FORWARD_HEADERS),
    ...(args?.headers ?? {}),
  };

  if (args?.asAdmin) {
    headers["x-hasura-role"] = "admin";
    headers["x-hasura-admin-secret"] =
      args.adminSecret || process.env.HASURA_GRAPHQL_ADMIN_SECRET || "";
  }

  return new HasuraClient({ endpoint, headers, useCache: false });
}
