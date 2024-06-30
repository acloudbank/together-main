import { AppProps } from "next/app";

export enum UserRole {
  Admin = "admin",
  User = "user",
  SignupInProgress = "signupInProgress",
  Unauthenticated = "unauthenticated",
}

export const HASURA_ALLOWED_ROLES = [
  UserRole.Admin,
  UserRole.User,
  UserRole.SignupInProgress,
  UserRole.Unauthenticated,
];

export type WithAuthentication<P = unknown> = P & {
  requiresAuthentication?: boolean;
  requiredRoles?: UserRole[];
};

export type AppAuthProps = AppProps & {
  Component: WithAuthentication;
};
