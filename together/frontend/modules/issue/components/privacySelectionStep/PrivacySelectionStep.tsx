import * as Styled from "./PrivacySelectionStep.styled";
import { Affix, AlienMonsterIcon, ShushingFaceIcon } from "ui";
import { usePrivacySelectionStep } from "./hooks";
import { GetIssueByIdQuery } from "generated-graphql";
import { PrivacySelectCard } from "./components";

type PrivacySelectionStepProps = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

export const PrivacySelectionStep = ({
  handleNext,
  issue,
}: PrivacySelectionStepProps): JSX.Element => {
  const {
    form,
    handleChange,
    isLoading,
    handleSubmit,
    handlePrivacyValueChange,
    selectedPrivacy,
  } = usePrivacySelectionStep({ handleNext, issue });

  return (
    <>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <Styled.FormItem
          name="privacy"
          rules={[{ required: true, message: "Please select privacy!" }]}
        >
          <Styled.RadioBoxContainer>
            <Styled.RadioBox
              onChange={handlePrivacyValueChange}
              value={selectedPrivacy}
            >
              <PrivacySelectCard
                value="Public"
                title="Public"
                content="Open issue to everyone in your area"
                cardIcon={<AlienMonsterIcon />}
                selected={selectedPrivacy === "Public"}
              />
              <PrivacySelectCard
                value="Private"
                title="Private"
                content="Closed issue for invited friends"
                cardIcon={<ShushingFaceIcon />}
                selected={selectedPrivacy === "Private"}
                isPrivateCard={true}
              />
            </Styled.RadioBox>
          </Styled.RadioBoxContainer>
        </Styled.FormItem>
        <Styled.SubmitContainer>
          <Affix offsetBottom={32}>
            <Styled.FormItem>
              <Styled.Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Save & Next
              </Styled.Button>
            </Styled.FormItem>
          </Affix>
        </Styled.SubmitContainer>
      </Styled.Form>
    </>
  );
};
