import { useRouter } from "common";
import { ResetPasswordError } from "../types";

export function useResetPasswordError(): ResetPasswordError | undefined {
  const router = useRouter();

  if (!router?.query.error) return undefined;

  const code = router.query?.error?.toString();
  const message = router.query?.errorMessage?.toString();
  const ref = router.query?.errorRef?.toString();

  return {
    code,
    message,
    ref,
  };
}
