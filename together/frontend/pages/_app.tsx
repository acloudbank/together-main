import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../modules/apollo";
import {
  SessionProvider as NextAuthProvider,
  useSession,
} from "next-auth/react";
import React from "react";
import { AppAuthProps, LoadingModal, UserRole, useRouter } from "../common";
import { LocalStorageSession } from "api";
import NoSSR from "react-no-ssr";
import "../public/css/styles.css";
import "react-spring-bottom-sheet/dist/style.css";
import NextAdapterPages from "next-query-params/pages";
import { QueryParamProvider } from "use-query-params";

const App = ({ Component, pageProps }: AppAuthProps) => {
  const {
    session,
  }: { session: LocalStorageSession & { expires: string; token: string } } =
    pageProps;
  const apolloClient = useApollo(pageProps.initialApolloState, session);

  return (
    <>
      <NoSSR>
        <NextAuthProvider session={pageProps.session}>
          <ApolloProvider client={apolloClient}>
            <QueryParamProvider adapter={NextAdapterPages}>
              {Component.requiresAuthentication ? (
                <Auth requiredRoles={Component.requiredRoles}>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </QueryParamProvider>
          </ApolloProvider>
        </NextAuthProvider>
      </NoSSR>
    </>
  );
};

export default App;

function Auth({
  children,
  requiredRoles,
}: {
  children: any;
  requiredRoles?: UserRole[];
}) {
  const router = useRouter();
  const { status, data } = useSession();

  if (status === "loading") {
    return (
      <div>
        <LoadingModal open={true}></LoadingModal>
      </div>
    );
  } else if (
    status === "authenticated" &&
    requiredRoles?.includes((data as unknown as LocalStorageSession)?.userRole)
  ) {
    return children;
  } else {
    const url = `/api/auth/signin?${new URLSearchParams({
      error: "SessionRequired",
      callbackUrl: window.location.href,
    })}`;
    router.push(url);
  }
}
