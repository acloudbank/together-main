import { Avatar, styled, BodyRegular, Body3Regular, UiKitCheckbox } from "ui";
import { colors } from "ui/colors";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  padding-top: 18px;
  :not(:last-child) {
    border-bottom: 1px solid ${colors.borderColor};
  }
`;

export const RepresentativeContainer = styled.div`
  display: flex;
  align-items: center;
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

export const CheckboxContainer = styled.div``;

export const Checkbox = styled(UiKitCheckbox)``;
