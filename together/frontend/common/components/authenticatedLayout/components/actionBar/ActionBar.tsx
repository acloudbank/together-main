import * as Styled from "./ActionBar.styled";
import { useRouter } from "common";

type Props = {
  onActionClick: () => void;
};
export const ActionBar = ({ onActionClick }: Props): JSX.Element => {
  const router = useRouter();
  const pathname = router.pathname;
  const changeTab = (tab: string) => {
    router.push(`/${tab}`);
  };

  return (
    <Styled.ActionBarContainer>
      <Styled.TabContainer
        key="explore"
        isActive={pathname.toLowerCase().includes("explore")}
        onClick={() => {
          changeTab("explore");
        }}
      >
        <Styled.IconContainer>
          {pathname.toLowerCase().includes("explore") ? (
            <Styled.HomeFillIcon />
          ) : (
            <Styled.HomeIcon />
          )}
        </Styled.IconContainer>
        <Styled.TabText>Explore</Styled.TabText>
      </Styled.TabContainer>
      <Styled.TabContainer
        key="my-issues"
        onClick={() => {
          changeTab("my-issues");
        }}
        isActive={pathname.toLowerCase().includes("my-issues")}
      >
        <Styled.IconContainer>
          {pathname.toLowerCase().includes("my-issues") ? (
            <Styled.IssueFillIcon />
          ) : (
            <Styled.IssueIcon />
          )}
        </Styled.IconContainer>
        <Styled.TabText>My issues</Styled.TabText>
      </Styled.TabContainer>
      <Styled.TabContainer
        key="action"
        onClick={(e) => {
          e.stopPropagation();
          onActionClick();
        }}
        isActive={false}
      >
        <Styled.ActionIconContainer>
          <Styled.ActionIcon />
        </Styled.ActionIconContainer>
      </Styled.TabContainer>
      <Styled.TabContainer
        key="history"
        onClick={() => {
          changeTab("history");
        }}
        isActive={pathname.toLowerCase().includes("history")}
      >
        <Styled.IconContainer>
          {pathname.toLowerCase().includes("history") ? (
            <Styled.HistoryFillIcon />
          ) : (
            <Styled.HistoryIcon />
          )}
        </Styled.IconContainer>
        <Styled.TabText>History</Styled.TabText>
      </Styled.TabContainer>
      <Styled.TabContainer
        onClick={() => {
          changeTab("profile");
        }}
        isActive={pathname.toLowerCase().includes("profile")}
      >
        <Styled.IconContainer>
          {pathname.toLowerCase().includes("profile") ? (
            <Styled.SmileFaceFillIcon />
          ) : (
            <Styled.SmileFaceIcon />
          )}
        </Styled.IconContainer>
        <Styled.TabText>Profile</Styled.TabText>
      </Styled.TabContainer>
    </Styled.ActionBarContainer>
  );
};
