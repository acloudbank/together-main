import { signIn } from "next-auth/react";

export function useLoginCallback(): typeof signIn {
  return signIn;
}
