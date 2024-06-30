import { ResultProps } from "../ui";
import Head from "next/head";
import React from "react";

import { ErrorPage } from "../common/pages";

type Props = {
  statusCode: ResultProps["status"];
};

const Error: React.FC<Props> = ({ statusCode }) => {
  const pageTitle = `${statusCode ?? "404"} - ${
    statusCode === "403"
      ? "Forbidden"
      : statusCode === "500"
      ? "Something went wrong"
      : "Page not found"
  }`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ErrorPage statusCode={statusCode ?? "404"} />
    </>
  );
};

export default Error;
