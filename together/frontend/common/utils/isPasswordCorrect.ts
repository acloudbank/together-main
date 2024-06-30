import bcrypt from "bcryptjs";

export function isPasswordCorrect(
  password: string,
  hashedPassword: string
): boolean {
  return (
    !!password &&
    !!hashedPassword &&
    bcrypt.compareSync(password, hashedPassword)
  );
}
