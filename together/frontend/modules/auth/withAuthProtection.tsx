import { signIn } from "next-auth/react";
import React from "react";

// eslint-disable-next-line no-restricted-imports
import Error from "../../pages/_error";
import { useCurrentUserRole, UserRole, useSession } from "../../common";

export function withAuthProtection<P>(
  WrappedPageComponent: React.ComponentType<P>,
  allowedRoles?: UserRole[]
) {
  // eslint-disable-next-line react/display-name
  return (props: P): JSX.Element | null => {
    const { willRedirect, isLoading, isUnauthorized } =
      useRedirectUnauthorized(allowedRoles);

    if (isLoading) {
      return <>...Loading</>;
    } else if (isUnauthorized) {
      return <Error statusCode={"404"} />;
    } else {
      if (willRedirect) return null;
      // @ts-ignore
      return <WrappedPageComponent {...props} />;
    }
  };
}

function useRedirectUnauthorized(allowedRoles: UserRole[] = []) {
  let willRedirect = false;
  let isUnauthorized = false;
  const [session, isLoadingSession] = useSession();
  const [currentUserRole] = useCurrentUserRole();
  const isLoading = isLoadingSession;

  if (!isLoading && !session) {
    signIn();
    willRedirect = true;
  }
  if (
    !isLoading &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(currentUserRole)
  ) {
    isUnauthorized = true;
  }
  return {
    willRedirect,
    isLoading,
    isUnauthorized,
  };
}
