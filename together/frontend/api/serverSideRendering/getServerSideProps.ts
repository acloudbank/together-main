import { LocalStorageSession } from "api";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import jwt from "jsonwebtoken";
import { HASURA_ALLOWED_ROLES, UserRole } from "common";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = (await getSession({ req })) as unknown as LocalStorageSession;

  const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY);
  const hasuraClaims = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": HASURA_ALLOWED_ROLES,
        "x-hasura-default-role": UserRole.Unauthenticated,
      },
    },
    jwtSecret.key,
    {
      algorithm: jwtSecret.type,
    }
  );

  return {
    props: {
      session:
        session && session.sessionId
          ? session
          : {
              token: hasuraClaims,
            },
    },
  };
};
