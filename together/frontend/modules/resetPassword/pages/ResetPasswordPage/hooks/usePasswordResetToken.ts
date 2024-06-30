import { useRouter } from "common";

export function usePasswordResetToken(): string | undefined {
  const router = useRouter();
  const passwordResetToken = router.query?.t?.toString();

  return passwordResetToken;
}
