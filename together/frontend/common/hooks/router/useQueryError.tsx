import React, { useMemo } from "react";

import { useRouter } from "./useRouter";
import { JsxNode } from "common/types";
import { getReadableErrorMessage } from "common/utils";
import Link from "next/link";

export function useQueryError(
  callbackUrl?: string | null
): string | null | JsxNode {
  const { query } = useRouter();
  const error = useMemo(
    () => (Array.isArray(query?.error) ? query?.error[0] : query?.error),
    [query.error]
  );

  const errorMessage = useMemo(() => {
    if (!error) return null;
    switch (error) {
      case "USER_NOT_FOUND":
        return (
          <>
            We couldnt find an account associated with this email.{" "}
            <Link
              href={
                callbackUrl
                  ? `/register?callbackUrl=${callbackUrl}`
                  : "/register"
              }
            >
              Register
            </Link>{" "}
            a new free account or try logging in with a different email address.
          </>
        );

      default:
        return getReadableErrorMessage(error);
    }
  }, [error, callbackUrl]);

  return errorMessage;
}
