import Head from "next/head";
import React, { FunctionComponent, ReactNode } from "react";
import * as Styled from "./CreationLayout.styled";
import { AntdConfigProvider } from "../antdConfigProvider";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  hasBackground?: boolean;
};

export const CreationLayout: FunctionComponent<Props> = ({
  children,
  description,
  title = "Together",
  hasBackground = true,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title} | Together</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AntdConfigProvider>
        <Styled.Page hasBackground={hasBackground}>
          <Styled.Layout>{children}</Styled.Layout>
        </Styled.Page>
      </AntdConfigProvider>
    </>
  );
};
