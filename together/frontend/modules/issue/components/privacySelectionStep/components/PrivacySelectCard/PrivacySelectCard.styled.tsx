import {
  BodyRegular,
  LabelSmall,
  Radio,
  RightOutlinedIcon,
  styled,
  Card as UiCard,
  BlackArrowRightIcon,
  WhiteArrowRightIcon,
  Typography,
} from "ui";
import { colors } from "ui/colors";

const { Title: UiTitle } = Typography;

export const RadioCard = styled(Radio)`
  text-decoration: none;
  :focus-visible {
    outline: none;
  }
  .ant-radio {
    display: none;
  }
  &.ant-radio-wrapper span.ant-radio + * {
    padding-inline-start: 0px;
    padding-inline-end: 0;
  }
  &.ant-radio-wrapper {
    margin-inline-end: 0;
  }
`;

export const Card = styled(UiCard)<{ $selected: boolean; $isPrivate: boolean }>`
  &.ant-card {
    margin-bottom: ${(props) => (props.$isPrivate ? `0` : `16px`)};
    filter: drop-shadow(3px 12px 36px rgba(137, 143, 164, 0.18));
    background-color: ${(props) =>
      props.$selected
        ? `${colors.textColor}`
        : `${colors.radioCardBackgroundColor}`};
    color: ${(props) =>
      props.$selected ? `${colors.white}` : `${colors.textColor}`};
    border-radius: ${(props) => (props.$isPrivate ? `12px 12px 0 0` : `12px`)};
  }
  .ant-card-body {
    padding: 16px;
  }
`;

export const FirstSection = styled.div`
  border-radius: 8px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondSection = styled.div``;

export const PrivacyIconContainer = styled.div`
  background: ${colors.white};
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowIconContainer = styled.div``;

export const ArrowBlackIcon = styled(BlackArrowRightIcon)``;

export const ArrowWhiteIcon = styled(WhiteArrowRightIcon)``;

export const Title = styled(UiTitle)<{ $selected: boolean }>`
  margin-bottom: 8px;
  color: ${(props) =>
    props.$selected ? `${colors.white}` : `${colors.textColor}`} !important;
`;

export const Content = styled(BodyRegular)``;

export const ThirdSection = styled.div``;

export const RightOutlined = styled(RightOutlinedIcon)``;

export const BottomContainer = styled(LabelSmall)`
  width: 100%;
  bottom: 0;
  right: 0;
  border-radius: 0 0 12px 12px;
  background: linear-gradient(104.39deg, #61a3ff 12.95%, #1472f2 91.17%);
  text-transform: uppercase;
  color: ${colors.white};
  padding: 4px 0 4px 16px;
`;
