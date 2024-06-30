import Head from "next/head";
import React, { FunctionComponent, ReactNode } from "react";
import * as Styled from "./AuthenticatedLayout.styled";
import { ActionBar, BottomSheet } from "./components";
import { useAction } from "./hooks";
import { AntdConfigProvider } from "../antdConfigProvider";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  hasToDisplayIssueBottom?: boolean;
};

export const AuthenticatedLayout: FunctionComponent<Props> = ({
  children,
  title = "Together",
  description,
  hasToDisplayIssueBottom = false,
}: Props) => {
  const {
    isOpen: isBottomSheetOpen,
    onActionClick,
    closeBottomSheet,
  } = useAction();
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
        <Styled.Page onClick={closeBottomSheet}>
          <Styled.Layout>{children}</Styled.Layout>
          {!hasToDisplayIssueBottom && <ActionBar onActionClick={onActionClick} />}

          <BottomSheet
            isOpen={isBottomSheetOpen}
            closeBottomSheet={closeBottomSheet}
          />
        </Styled.Page>
      </AntdConfigProvider>
    </>
  );
};
