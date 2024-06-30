import {
  styled,
  BodySemiBold,
  Button as UiButton,
  BackhandIndexPointingRightIcon,
  SmilingFaceWithSunglassesIcon,
} from "ui";
import { colors } from "ui/colors";

export const MainContainer = styled.div``;

export const CommentsContainer = styled.div``;

export const NoCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

`;

export const WriteCommentButtton = styled(UiButton)`
  width: 100%;
`;

export const GreetingMessage = styled(BodySemiBold)`
  line-height: 110%;
  letter-spacing: 0.2px;  
`;

export const MessageAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 60.5px;
  text-align: center;
`;


export const CommentLabelAndCount = styled(BodySemiBold)`
  font-size: 22px;
  line-height: 110%;
  letter-spacing: 0.2px;
`;

export const SortAndLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SortContainer = styled.div`
display: flex;
gap: 8px;
align-items: center;
color: ${colors.iconColor};
.anticon-swap {
    transform: rotate(90deg);
}
`;

export const HandRightIcon = styled(BackhandIndexPointingRightIcon)``;

export const SmilingFaceIcon = styled(SmilingFaceWithSunglassesIcon)``;