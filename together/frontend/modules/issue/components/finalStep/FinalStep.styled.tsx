import { styled, Button as UiButton, Typography, Body2Regular } from "ui";
import { colors } from "ui/colors";
import { customVariables } from "ui/customVariables";

const { Title: UiTitle } = Typography;

export const FinalStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(UiTitle)`
  text-align: center;
  color: ${colors.primaryColor} !important;
  margin-bottom: 8px !important;
  margin-top: 0 !important;
`;

export const FinalMessage = styled(Body2Regular)`
  width: 300px;
  text-align: center;
  margin-bottom: 44px;
`;

export const Button = styled(UiButton)`
  color: ${colors.white};
  width: 100%;
`;

export const SubmitContainer = styled.div`
  width: calc(100% - ${customVariables.pageInlineCumulativePadding});
`;

export const IconContainer = styled.div`
  margin-bottom: 28px;
  height: 190px;
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.radioCardBackgroundColor};
`;

export const InnerBox = styled.div`
  background: ${colors.primaryColor};
  width: 160px;
  height: 160px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
