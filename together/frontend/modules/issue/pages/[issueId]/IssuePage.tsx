import { AuthenticatedLayout, CATEGORY_TO_BACKGROUND_COLOR, LoadingModal, UserRole, WithAuthentication, useRouter } from "common";
import { NextPage } from "next";
import * as Styled from "./IssuePage.styled";
import { Comments, ImpactCard } from "modules/issue/components";
import { LeftOutlinedIcon, UserAddOutlinedIcon, LockOutlinedIcon } from "ui";

import { useIssue, useIssuePage } from "./hooks";

const IssuePage: WithAuthentication<NextPage> = () => {
  const router = useRouter();
  const { issueId } = router.query as { issueId: string };
  const { issue, isLoadingIssue } = useIssue({ issueId });
  const { formattedDate, handleReadHideIssueContent, readHide } = useIssuePage({
    issue,
  });

  if ((!issue || !issue.issues_by_pk) && !isLoadingIssue) {
    router.push("/explore");
  }

  const IssueContent = (
    <>
      <Styled.PageContainer
        $backgroundColor={CATEGORY_TO_BACKGROUND_COLOR[`${issue?.issues_by_pk?.category}`]}
      >
        <Styled.NavigatorContainer>
          <Styled.BackContainer
            onClick={() => {
              router.push("/explore");
            }}
          >
            <LeftOutlinedIcon />
            <Styled.BackText>BACK TO EXPLORE</Styled.BackText>
          </Styled.BackContainer>
          {/*TODO: Invite button will be linked to share card */}
          <Styled.InviteButton icon={<UserAddOutlinedIcon />} shape="round">
            Invite
          </Styled.InviteButton>
        </Styled.NavigatorContainer>
      </Styled.PageContainer>
      <Styled.IssueDetailsContainer>
        {issue?.issues_by_pk.isPrivate && (
          <Styled.PrivateButton icon={<LockOutlinedIcon />}>
            Private
          </Styled.PrivateButton>
        )}
        <Styled.IssueTitle level={2}>
          {issue?.issues_by_pk?.title}
        </Styled.IssueTitle>
        <Styled.UserProfileContainer>
          <Styled.UserProfile icon={<Styled.UserAvatar />} type="text">
            {issue?.issues_by_pk?.user.username}
          </Styled.UserProfile>
          <Styled.IssueCreateDate>
            {formattedDate(issue?.issues_by_pk?.created_at)}
          </Styled.IssueCreateDate>
        </Styled.UserProfileContainer>
        <Styled.IssueDescription $readHide={readHide}>
          {issue?.issues_by_pk?.content}
          <span>#{issue?.issues_by_pk?.category}</span>
        </Styled.IssueDescription>
        <Styled.ContentToggleButton
          type="text"
          onClick={handleReadHideIssueContent}
        >
          {readHide ? "Hide text..." : "Read all..."}
        </Styled.ContentToggleButton>
        <Styled.ArticleLink href={issue?.issues_by_pk?.link} target="_blank">
          {issue?.issues_by_pk.link}
        </Styled.ArticleLink>
        <Styled.SubmitContainer>
          <Styled.WriteLetterButton
            type="primary"
            shape="round"
            onClick={() => router.push(`/create-letter`)}
          >
            Write a letter
          </Styled.WriteLetterButton>
        </Styled.SubmitContainer>
        <Styled.Label level={5}>Follow our impact</Styled.Label>
        <Styled.MembersAndLettersCardContainer>
          {/* TODO: Members data will be handled dynamically when we have members */}
          <ImpactCard cardTitle="Members" count={257} />
          <ImpactCard
            cardTitle="Letters"
            count={issue?.issues_by_pk?.letters_aggregate.aggregate?.count}
          />
        </Styled.MembersAndLettersCardContainer>
        {/* TODO: Achievements data will be handled dynamically when we have achievements */}
        <Styled.AchievementsContainer>
          <ImpactCard
            cardTitle="Achievements"
            count={257}
            isAchievementCard={true}
          />
        </Styled.AchievementsContainer>
        {/* TODO: Comments card will be displayed here... */}
        <Styled.CommentsContainer>
          <Comments
            likeCount={issue?.issues_by_pk.userIssueListEntries_aggregate?.aggregate?.count}
          />
        </Styled.CommentsContainer>
      </Styled.IssueDetailsContainer>
    </>
  );

  const PageContentWithLoadingModal = isLoadingIssue ? (
    <LoadingModal open={isLoadingIssue} />
  ) : (
    IssueContent
  );

  return <AuthenticatedLayout hasToDisplayIssueBottom={true}>{PageContentWithLoadingModal}</AuthenticatedLayout>;
};

IssuePage.requiresAuthentication = true;
IssuePage.requiredRoles = [UserRole.User];

export default IssuePage;
