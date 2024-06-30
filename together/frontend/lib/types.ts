import { AppErrorCodes } from "../errors";

export type ApolloBaseOptions =
  | {
      expectedErrors?: AppErrorCodes;
    }
  | undefined;

export type Headers = Record<string, string>;
