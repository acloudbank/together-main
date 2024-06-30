import { Button, Result, ResultProps } from "../../../ui";
import React from "react";

import * as Styled from "./ErrorPage.styled";

export type Props = {
  statusCode: ResultProps["status"];
};

export const ErrorPage: React.FC<Props> = ({ statusCode }) => {
  const renderSubtitle = () => {
    switch (statusCode) {
      case "403":
        return "Sorry, you are not authorized to access this page.";
      case "404":
        return "Sorry, the page you visited does not exist.";
      case "500":
        return "Sorry, something went wrong.";
    }
  };

  return (
    <Styled.Flex>
      <Result
        status={statusCode}
        title={statusCode}
        subTitle={renderSubtitle()}
        extra={
          <Button href="/explore" type="primary">
            Back Home
          </Button>
        }
      />
    </Styled.Flex>
  );
};
