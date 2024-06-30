import { MutationOptions, QueryOptions } from "@apollo/client";
import { AppErrorCodes } from "../errors";
import {
  AuthenticateWithCredentialsDocument,
  AuthenticateWithCredentialsMutation,
  AuthenticateWithCredentialsMutationVariables,
  AuthenticateWithGoogleDocument,
  AuthenticateWithGoogleMutation,
  AuthenticateWithGoogleMutationVariables,
  ConfirmEmailDocument,
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables,
  CreateSessionForUserDocument,
  CreateSessionForUserMutation,
  CreateSessionForUserMutationVariables,
  InsertUserDocument,
  InsertUserMutation,
  InsertUserMutationVariables,
  GetSessionByIdDocument,
  GetSessionByIdQuery,
  GetSessionByIdQueryVariables,
  GetUserByIdDocument,
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
  GetUserDocument,
  GetUserQuery,
  GetUserQueryVariables,
  InvalidateSessionsForUserDocument,
  InvalidateSessionsForUserMutation,
  InvalidateSessionsForUserMutationVariables,
  RefreshSessionDocument,
  RefreshSessionMutation,
  RefreshSessionMutationVariables,
  ResetPasswordDocument,
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
  UpdateUserByIdDocument,
  UpdateUserByIdMutation,
  UpdateUserByIdMutationVariables,
  GetLetterContentByIdQueryVariables,
  GetLetterContentByIdQuery,
  GetLetterContentByIdDocument,
  UpdateLetterContentRepresentativeNameByIdMutation,
  UpdateLetterContentRepresentativeNameByIdMutationVariables,
  UpdateLetterContentRepresentativeNameByIdDocument,
} from "generated-graphql";
import { HasuraClient } from "../lib";

// TODO: This file and all backend functions should be auto generated by codegen custom plugin

////////////////////////

export type GetUserQueryPromiseOptions =
  | Omit<QueryOptions<GetUserQueryVariables, GetUserQuery>, "query"> & {
      expectedErrors?: AppErrorCodes;
      client: HasuraClient;
    };

export async function queryGetUser(options: GetUserQueryPromiseOptions) {
  const { client } = options;
  const [data, meta] = await client.query<
    GetUserQuery,
    GetUserQueryVariables,
    GetUserQueryPromiseOptions
  >(GetUserDocument, options);

  return [data, meta] as const;
}

//////////////////////////

export type GetUserByIdQueryPromiseOptions =
  | Omit<QueryOptions<GetUserByIdQueryVariables, GetUserByIdQuery>, "query"> & {
      expectedErrors?: AppErrorCodes;
      client: HasuraClient;
    };

export async function queryGetUserById(
  options: GetUserByIdQueryPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.query<
    GetUserByIdQuery,
    GetUserByIdQueryVariables,
    GetUserByIdQueryPromiseOptions
  >(GetUserByIdDocument, options);

  const result = {
    user: data.users_by_pk,
  };

  return [result, meta] as const;
}

////////////////////

export type InsertUserMutationPromiseOptions =
  | Omit<
      MutationOptions<InsertUserMutation, InsertUserMutationVariables>,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function insertUser(options: InsertUserMutationPromiseOptions) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    InsertUserMutation,
    InsertUserMutationVariables,
    InsertUserMutationPromiseOptions
  >(InsertUserDocument, options);

  return [data, meta] as const;
}

/////////////////////

export type UpdateUserByIdMutationPromiseOptions =
  | Omit<
      MutationOptions<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function updateUserById(
  options: UpdateUserByIdMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    UpdateUserByIdMutation,
    UpdateUserByIdMutationVariables,
    UpdateUserByIdMutationPromiseOptions
  >(UpdateUserByIdDocument, options);

  return [data, meta] as const;
}

////////////////////

export type CreateSessionForUserMutationPromiseOptions =
  | Omit<
      MutationOptions<
        CreateSessionForUserMutation,
        CreateSessionForUserMutationVariables
      >,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function createSessionForUser(
  options: CreateSessionForUserMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    CreateSessionForUserMutation,
    CreateSessionForUserMutationVariables,
    CreateSessionForUserMutationPromiseOptions
  >(CreateSessionForUserDocument, options);

  return [data, meta] as const;
}

//////////////////

export type AuthenticateWithGoogleMutationPromiseOptions =
  | Omit<
      MutationOptions<
        AuthenticateWithGoogleMutation,
        AuthenticateWithGoogleMutationVariables
      >,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function authenticateWithGoogle(
  options: AuthenticateWithGoogleMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    AuthenticateWithGoogleMutation,
    AuthenticateWithGoogleMutationVariables,
    AuthenticateWithGoogleMutationPromiseOptions
  >(AuthenticateWithGoogleDocument, options);

  return [data, meta] as const;
}

/////////////////////////////////////////

export type AuthenticateWithCredentialsMutationPromiseOptions =
  | Omit<
      MutationOptions<
        AuthenticateWithCredentialsMutation,
        AuthenticateWithCredentialsMutationVariables
      >,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function authenticateWithCredentials(
  options: AuthenticateWithCredentialsMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    AuthenticateWithCredentialsMutation,
    AuthenticateWithCredentialsMutationVariables,
    AuthenticateWithCredentialsMutationPromiseOptions
  >(AuthenticateWithCredentialsDocument, options);

  return [data, meta] as const;
}

/////////////////////////////////////

export type InvalidateSessionsForUserMutationPromiseOptions =
  | Omit<
      MutationOptions<
        InvalidateSessionsForUserMutation,
        InvalidateSessionsForUserMutationVariables
      >,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function invalidateSessionsForUser(
  options: InvalidateSessionsForUserMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    InvalidateSessionsForUserMutation,
    InvalidateSessionsForUserMutationVariables,
    InvalidateSessionsForUserMutationPromiseOptions
  >(InvalidateSessionsForUserDocument, options);

  return [data, meta] as const;
}

///////////////////////////////////

export type ResetPasswordMutationPromiseOptions =
  | Omit<
      MutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function resetPassword(
  options: ResetPasswordMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    ResetPasswordMutationPromiseOptions
  >(ResetPasswordDocument, options);

  return [data, meta] as const;
}

///////////////////////////

export type ConfirmEmailMutationPromiseOptions =
  | Omit<
      MutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function confirmEmail(
  options: ConfirmEmailMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    ConfirmEmailMutation,
    ConfirmEmailMutationVariables,
    ConfirmEmailMutationPromiseOptions
  >(ConfirmEmailDocument, options);

  return [data, meta] as const;
}

////////////////////////////////

export type GetSessionByIdQueryPromiseOptions =
  | Omit<
      QueryOptions<GetSessionByIdQueryVariables, GetSessionByIdQuery>,
      "query"
    > & {
      expectedErrors?: AppErrorCodes;
      client: HasuraClient;
    };

export async function queryGetSessionById(
  options: GetSessionByIdQueryPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.query<
    GetSessionByIdQuery,
    GetSessionByIdQueryVariables,
    GetSessionByIdQueryPromiseOptions
  >(GetSessionByIdDocument, options);

  const result = {
    session: data.sessions_by_pk,
  };

  return [result, meta] as const;
}

//////////////////////////

export type GetLetterContentByIdQueryPromiseOptions =
  | Omit<
      QueryOptions<
        GetLetterContentByIdQueryVariables,
        GetLetterContentByIdQuery
      >,
      "query"
    > & {
      expectedErrors?: AppErrorCodes;
      client: HasuraClient;
    };

export async function queryGetLetterContentById(
  options: GetLetterContentByIdQueryPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.query<
    GetLetterContentByIdQuery,
    GetLetterContentByIdQueryVariables,
    GetLetterContentByIdQueryPromiseOptions
  >(GetLetterContentByIdDocument, options);

  return [data, meta] as const;
}

//////////////////////////

export type RefreshSessionMutationPromiseOptions =
  | Omit<
      MutationOptions<RefreshSessionMutation, RefreshSessionMutationVariables>,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function refreshSession(
  options: RefreshSessionMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    RefreshSessionMutation,
    RefreshSessionMutationVariables,
    RefreshSessionMutationPromiseOptions
  >(RefreshSessionDocument, options);

  return [data, meta] as const;
}

////////////////

export type UpdateLetterContentRepresentativeNameByIdMutationPromiseOptions =
  | Omit<
      MutationOptions<
        UpdateLetterContentRepresentativeNameByIdMutation,
        UpdateLetterContentRepresentativeNameByIdMutationVariables
      >,
      "mutation"
    > & { expectedErrors?: AppErrorCodes; client: HasuraClient };

export async function updateLetterContentRepresentativeNameById(
  options: UpdateLetterContentRepresentativeNameByIdMutationPromiseOptions
) {
  const { client } = options;
  const [data, meta] = await client.mutate<
    UpdateLetterContentRepresentativeNameByIdMutation,
    UpdateLetterContentRepresentativeNameByIdMutationVariables,
    UpdateLetterContentRepresentativeNameByIdMutationPromiseOptions
  >(UpdateLetterContentRepresentativeNameByIdDocument, options);

  return [data, meta] as const;
}