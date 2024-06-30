import {
  Avatar,
  Body3Regular,
  BodyRegular,
  Button as UiButton,
  Pre,
  styled,
} from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";
import {
  ExitFullScreenIcon as UiExitFullScreenIcon,
  EditIcon as UiEditIcon,
} from "ui/icons";

export const PageContainer = styled.div`
  padding-inline: ${customVariables.pageInlinePadding};
  padding-top: ${customVariables.navigatorsTopPadding};
  padding-bottom: ${customVariables.stepsBottomPadding};
  height: 100vh;
`;

export const NavigatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const EditAndExitFullScreenIconsContainer = styled.div`
  display: flex;
`;

export const ExitFullScreenIcon = styled(UiExitFullScreenIcon)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;
export const EditIcon = styled(UiEditIcon)`
  width: 16px;
  height: 16px;
`;

export const RepresentativeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.borderColor};
  margin-bottom: 24px;
`;

export const RepresentativeAvatar = styled(Avatar)`
  margin-right: 12px;
`;

export const RepresentativeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepresentativeName = styled(BodyRegular)`
  margin-bottom: 4px;
`;

export const RepresentativePosition = styled(Body3Regular)`
  color: ${colors.iconColor};
`;

export const LetterPreset = styled(Pre)`
  font-size: 14px;
`;

export const Button = styled(UiButton)`
  width: 100%;
`;

export const SubmitContainer = styled.div`
  position: fixed;
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
  bottom: ${customVariables.submitButtonBottomSpace};
`;
