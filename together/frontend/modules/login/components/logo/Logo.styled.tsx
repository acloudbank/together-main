import { colors } from "ui/colors";
import { BodyRegular, styled, Typography } from "../../../../ui";

const { Title } = Typography;

export const LogoContainer = styled.div<{ backgroundUrl: string }>`
  width: 100% !important;
  height: 108vw !important;
  background-image: ${(props) => `url(${props.backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 24px;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 64%;
  width: 100%;
`;

export const Header = styled(Title)`
  color: ${colors.white} !important;
  text-align: center;
  margin-bottom: 16px !important;
  margin-top: 0;
`;

export const Description = styled(BodyRegular)`
  color: ${colors.white};
  text-align: center;
`;
