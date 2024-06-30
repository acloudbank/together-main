import {
  AuthenticateWithCredentialsMutationVariables,
  ConfirmEmailMutationVariables,
  Maybe,
  ResetPasswordMutationVariables,
  SessionType_Enum,
} from "generated-graphql";
import { UserRole } from "../common";

export type GoogleCredentials = {
  email: string | undefined;
  accountType?: UserRole;
  username?: string;
};

export interface AuthenticationResultData {
  sessionId: string;
}

export type AuthenticationResponse =
  | Maybe<AuthenticationResultData>
  | undefined;

export type Credentials = AuthenticateWithCredentialsMutationVariables &
  ResetPasswordMutationVariables &
  ConfirmEmailMutationVariables & {
    callbackUrl: string;
  } & {
    sessionId: string;
  };

export type LocalStorageSession = {
  sessionId?: string;
  sessionType?: Maybe<SessionType_Enum>;
  userId?: Maybe<string>;
  userRole?: Maybe<UserRole>;
};
