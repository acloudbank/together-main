import Head from "next/head";
import React, { FunctionComponent, ReactNode } from "react";
import * as Styled from "./UnauthenticatedLayout.styled";
import { AntdConfigProvider } from "../antdConfigProvider";

type LogoProps = {
  header: string;
  description: string;
  backgroundUrl: string;
};

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  Logo?: React.FC<LogoProps>;
  logoTitle?: string;
  logoDescription?: string;
  logoBackgroundUrl?: string;
  backgroundColor?: string;
};

export const UnauthenticatedLayout: FunctionComponent<Props> = ({
  children,
  title = "Together",
  description,
  Logo,
  logoTitle,
  logoBackgroundUrl,
  logoDescription,
  backgroundColor,
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
        <Styled.Page $backgroundColor={backgroundColor}>
          {Logo && (
            <Logo
              backgroundUrl={logoBackgroundUrl}
              header={logoTitle}
              description={logoDescription}
            />
          )}
          <Styled.Layout>{children}</Styled.Layout>
        </Styled.Page>
      </AntdConfigProvider>
    </>
  );
};
