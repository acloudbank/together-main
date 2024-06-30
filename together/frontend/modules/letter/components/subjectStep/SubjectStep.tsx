import { GetLetterByIdQuery } from "generated-graphql";
import { BodySemiBold, UiKitRadio } from "ui";
import * as Styled from "./SubjectStep.styled";
import { useSubjectStep } from "./hooks";
import { LetterSubjectType } from "./types";

type Props = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
};

export const SubjectStep = ({ next, letter }: Props): JSX.Element => {
  const {
    handleLetterSubjectTypeChange,
    letterSubjectType,
    form,
    handleChange,
    handleSubmit,
    handleSelectedIssueSubmit,
    isLoading,
  } = useSubjectStep({
    next,
    letter,
  });
  return (
    <Styled.Container>
      <Styled.RadioGroup
        onChange={handleLetterSubjectTypeChange}
        value={letterSubjectType}
      >
        <Styled.Space direction="vertical">
          <UiKitRadio value={LetterSubjectType.BasedOnIssue}>
            <BodySemiBold>Based on Issue</BodySemiBold>
          </UiKitRadio>
          <UiKitRadio value={LetterSubjectType.CustomRequest}>
            <BodySemiBold>Custom Request</BodySemiBold>
          </UiKitRadio>
        </Styled.Space>
      </Styled.RadioGroup>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <Styled.FormItem
          name="topic"
          rules={[
            {
              required: true,
              message: "Please input the topic of the letter!",
            },
          ]}
        >
          <Styled.Input
            placeholder="Write the topic of your letter"
            disabled={letterSubjectType === LetterSubjectType.BasedOnIssue}
          />
        </Styled.FormItem>
      </Styled.Form>
      <Styled.SubmitContainer>
        <Styled.Button
          type="primary"
          htmlType="button"
          onClick={(_e) => {
            letterSubjectType === LetterSubjectType.BasedOnIssue
              ? handleSelectedIssueSubmit()
              : form.submit();
          }}
          loading={isLoading}
        >
          Save & Next
        </Styled.Button>
      </Styled.SubmitContainer>
    </Styled.Container>
  );
};
