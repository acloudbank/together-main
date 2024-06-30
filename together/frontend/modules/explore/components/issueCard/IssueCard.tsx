import { Issues_Users, Users } from "generated-graphql";
import * as Styled from "./IssueCard.styled";
import { CATEGORY_TO_BACKGROUND_COLOR, useRouter } from "common";

type Props = {
  title: string;
  content: string;
  category: string;
  id: string;
  likeCount: number;
  creator: Users;
  members: Issues_Users[];
  openMeatBallsMenu: (issueId: string) => void;
  isIssueLiked: boolean;
  likeIssue: (issueId: string) => Promise<void>;
  unLikeIssue: (issueId: string) => Promise<void>;
};

export const IssueCard = ({
  title,
  content,
  category,
  id,
  likeCount,
  creator,
  members,
  isIssueLiked,
  likeIssue,
  unLikeIssue,
  openMeatBallsMenu,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Styled.Card>
      {/* In the router path, id should be dynamic */}
      <Styled.CardBody>
        <Styled.CardInformation>
          <Styled.IssueTitle level={2}>{title}</Styled.IssueTitle>

          <Styled.IssueDescription>{content}</Styled.IssueDescription>

          <Styled.ActionAndUsersContainer>
            <Styled.Users>
              {/* This is the creator */}
              <Styled.UserAvatar />
              {/* Other members */}
              {members.slice(0, 2).map((member) => (
                <Styled.UserAvatar key={member.id} />
              ))}

              {members.length > 2 ? (
                <Styled.UserCount>{members.length - 2}+</Styled.UserCount>
              ) : (
                <Styled.UserCount>0+</Styled.UserCount>
              )}
            </Styled.Users>

            <Styled.Actions>
              <Styled.Like>
                <Styled.LikeCount>{likeCount}</Styled.LikeCount>
                {!isIssueLiked ? (
                  <Styled.LikeOutlinedIcon
                    onClick={() => {
                      likeIssue(id);
                    }}
                  />
                ) : (
                  <Styled.LikeFilledIcon
                    onClick={() => {
                      unLikeIssue(id);
                    }}
                  />
                )}
              </Styled.Like>

              <Styled.Share>
                <Styled.ShareOutlinedIcon />
              </Styled.Share>

              <Styled.EllipsisIcon
                onClick={() => {
                  openMeatBallsMenu(id);
                }}
              />
            </Styled.Actions>
          </Styled.ActionAndUsersContainer>
        </Styled.CardInformation>

        <Styled.CardCategory
          onClick={() => {
            router.push(`/issue/${id}`);
          }}
          $backgroundColor={CATEGORY_TO_BACKGROUND_COLOR[`${category}`]}
        >
          <Styled.RightArrowIcon />
          <Styled.CategoryName>
            #{category.replace("_", " ")}
          </Styled.CategoryName>
        </Styled.CardCategory>
      </Styled.CardBody>
    </Styled.Card>
  );
};
