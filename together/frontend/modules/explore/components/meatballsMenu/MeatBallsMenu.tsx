import { useRouter } from "common";
import * as Styled from "./MeatBallsMenu.styled";

type Props = {
  issueId: string;
  isOpen: boolean;
  handleCancel: () => void;
  hideIssue: () => Promise<void>;
  unHideIssue: () => Promise<void>;
  isIssueHidden: boolean;
  isUserJoinedIssue?: boolean;
  isExplorePage?: boolean;
  handleLeaveIssue?: () => void;
  handleJoinIssue?: (issueId: string) => void;
};

export const MeatBallsMenu = ({
  isOpen,
  issueId,
  handleCancel,
  hideIssue,
  unHideIssue,
  isIssueHidden,
  isUserJoinedIssue,
  isExplorePage = true,
  handleLeaveIssue,
  handleJoinIssue,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Styled.Container>
      <Styled.Modal closable={false} open={isOpen} footer={null} centered>
        <Styled.Menu>
          {/* Hide or unHide issue */}
          <Styled.MenuItem
            onClick={() => {
              if (!isIssueHidden) {
                hideIssue();
              } else {
                unHideIssue();
              }
              handleCancel();
            }}
          >
            {!isIssueHidden ? (
              <>
                <Styled.MenuIconContainer>
                  <Styled.InvisibleIcon />
                </Styled.MenuIconContainer>
                <Styled.MenuText>Hide from me</Styled.MenuText>
              </>
            ) : (
              <>
                <Styled.MenuIconContainer>
                  <Styled.EyeIcon />
                </Styled.MenuIconContainer>
                <Styled.MenuText>Make the issue visible</Styled.MenuText>
              </>
            )}
          </Styled.MenuItem>
          {/* Complain issue */}
          <Styled.MenuItem>
            <Styled.MenuIconContainer>
              <Styled.WarningIcon />
            </Styled.MenuIconContainer>
            <Styled.MenuText>Complain the issue</Styled.MenuText>
          </Styled.MenuItem>
          {isExplorePage ?
            // Create a letter
            (
              <Styled.MenuItem
                onClick={() => {
                  router.push(`/create-letter?issueId=${issueId}`);
                }}
              >
                <Styled.MenuIconContainer>
                  <Styled.PlusIcon />
                </Styled.MenuIconContainer>
                <Styled.MenuText>Create a letter</Styled.MenuText>
              </Styled.MenuItem>
            )
            :
            // Leave the issue & Join the issue
            (
              < Styled.MenuItem
                onClick={() => {
                  if(isUserJoinedIssue) {
                    handleLeaveIssue();
                  } else {
                    handleJoinIssue(issueId);
                  }
                }}
              >
                <Styled.MenuIconContainer>
                  {isUserJoinedIssue ? <Styled.LogoutIcon /> : <Styled.LoginIcon />}
                </Styled.MenuIconContainer>
                <Styled.MenuText>{isUserJoinedIssue? "Leave the issue" : "Join the issue"}</Styled.MenuText>
              </Styled.MenuItem>
            )
          }
        </Styled.Menu>
        <Styled.Cancel onClick={handleCancel}>Cancel</Styled.Cancel>
      </Styled.Modal>
    </Styled.Container>
  );
};
