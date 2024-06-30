import { AuthenticatedLayout, LoadingModal, UserRole, WithAuthentication, useRouter } from "common";
import { NextPage } from "next";
import * as Styled from "./Discussion.styled";
import { LeftOutlinedIcon } from "ui";
import { useIssue } from "../hooks";
import { Comments } from "modules/issue/components";

const Discussion: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { issueId } = router.query as { issueId: string };
  const { issue, isLoadingIssue } = useIssue({ issueId });

  if ((!issue || !issue.issues_by_pk) && !isLoadingIssue) {
    router.push("/explore");
  }

  const handleGoBack = () => {
    router.push(`/issue/${issueId}`);
  };

  const PageContent = (
    <AuthenticatedLayout hasToDisplayIssueBottom={true}>
      <Styled.NavigatorContainer>
        <Styled.BackContainer onClick={handleGoBack}>
          <LeftOutlinedIcon />
          <Styled.BackText>BACK TO ISSUE</Styled.BackText>
        </Styled.BackContainer>
      </Styled.NavigatorContainer>
      <Styled.CommentsContainer>
        <Comments
          likeCount={issue?.issues_by_pk.userIssueListEntries_aggregate?.aggregate?.count}
          isDuscussionPage={true}
        />
      </Styled.CommentsContainer>
    </AuthenticatedLayout>
  );

  const PageContentWithLoadingModal = isLoadingIssue ? (
    <LoadingModal open={isLoadingIssue} />
  ) : (
    PageContent
  );

  return <>{PageContentWithLoadingModal}</>
};

Discussion.requiresAuthentication = true;
Discussion.requiredRoles = [UserRole.User];

export default Discussion;
