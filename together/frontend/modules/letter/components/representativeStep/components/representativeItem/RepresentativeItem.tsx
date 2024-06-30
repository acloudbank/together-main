import { Representatives } from "generated-graphql";
import * as Styled from "./RepresentativeItem.styled";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type Props = {
  representative: Representatives;
  checked: boolean;
  onCheckboxChange: (e: CheckboxChangeEvent) => void;
};

export const RepresentativeItem = ({
  representative,
  checked,
  onCheckboxChange: handleCheckboxChange,
}: Props): JSX.Element => {
  return (
    <Styled.ItemContainer>
      <Styled.RepresentativeContainer>
        <Styled.RepresentativeAvatar />
        <Styled.RepresentativeInfo>
          <Styled.RepresentativeName>{`${representative.firstname} ${
            representative.middlename
              ? `${representative.middlename.charAt(0)}.`
              : ""
          } ${representative.lastname}`}</Styled.RepresentativeName>
          <Styled.RepresentativePosition>
            Senator / Head of streets department
          </Styled.RepresentativePosition>
        </Styled.RepresentativeInfo>
      </Styled.RepresentativeContainer>
      <Styled.CheckboxContainer>
        <Styled.Checkbox
          value={representative.id}
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </Styled.CheckboxContainer>
    </Styled.ItemContainer>
  );
};
