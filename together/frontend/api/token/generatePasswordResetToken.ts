import { nanoid } from "nanoid";

export function generatePasswordResetToken(): string {
  return nanoid();
}
