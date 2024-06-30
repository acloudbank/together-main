import { GetLetterByIdQuery, Representatives } from "generated-graphql";
import { useRepresentativeStep } from "./hooks";

import * as Styled from "./RepresentativeStep.styled";
import { RepresentativeItem } from "./components";

type Props = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
  generateLetterContents: () => Promise<void>;
};

export const RepresentativeStep = ({
  next,
  letter,
  generateLetterContents,
}: Props): JSX.Element => {
  const {
    representatives,
    //isLoadingRepresentatives,
    selectedRepresentativesIds,
    handleSelectAll,
    handleCheckboxChange,
    handleSubmit,
    isLoading,
  } = useRepresentativeStep({ next, letter, generateLetterContents });

  return (
    <>
      <Styled.TitleContainer>
        <Styled.SelectionCount>
          {selectedRepresentativesIds.length}/
          {representatives?.representatives
            ? representatives?.representatives?.length
            : 0}{" "}
          Selected
        </Styled.SelectionCount>
        <Styled.SelectAllContainer>
          {/* <Styled.SelectAll>Select all</Styled.SelectAll> */}
          <Styled.SelectAllCheckbox
            checked={
              selectedRepresentativesIds.length ===
              representatives?.representatives?.length
            }
            onChange={handleSelectAll}
          >
            Select all
          </Styled.SelectAllCheckbox>
        </Styled.SelectAllContainer>
      </Styled.TitleContainer>
      <Styled.ListContainer>
        {representatives?.representatives?.map((representative) => (
          <RepresentativeItem
            key={representative.id}
            representative={representative as Representatives}
            checked={selectedRepresentativesIds.includes(representative.id)}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </Styled.ListContainer>
      <Styled.SubmitContainer>
        <Styled.Button
          type="primary"
          htmlType="button"
          onClick={handleSubmit}
          disabled={
            !selectedRepresentativesIds ||
            selectedRepresentativesIds?.length === 0
          }
          loading={isLoading}
        >
          Save & Next
        </Styled.Button>
      </Styled.SubmitContainer>
    </>
  );
};
