import { GetLetterByIdQuery } from "generated-graphql";

import * as Styled from "./PurposeStep.styled";
import { Affix } from "ui";
import { usePurposeStep } from "./hooks";

type Props = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
};

export const PurposeStep = ({ next, letter }: Props): JSX.Element => {
  const {
    form,
    handleChange,
    handleSubmit,
    isLoading,
    handleFeelingClick,
    handleExpectationClick,
    feelings,
    expectations,
    selectedFeelings,
    selectedExpectations,
  } = usePurposeStep({
    next,
    letter,
  });
  return (
    <>
      <Styled.Label>How you feel about issue?*</Styled.Label>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <Styled.FormItem
          name="feelings"
          rules={[{ required: true, message: "Please input your feeling!" }]}
        >
          <Styled.Input placeholder="Select or write your feeling" />
        </Styled.FormItem>
        <Styled.ItemsContainer>
          {feelings.map((feeling) => (
            <Styled.Item
              key={feeling}
              onClick={() => {
                handleFeelingClick(feeling);
              }}
              $isActive={selectedFeelings.includes(feeling)}
            >
              {feeling}
            </Styled.Item>
          ))}
        </Styled.ItemsContainer>
        <Styled.Label>What do you expect about this issue?*</Styled.Label>
        <Styled.FormItem
          name="expectations"
          rules={[
            { required: true, message: "Please input your expectations!" },
          ]}
        >
          <Styled.Input placeholder="Select or write your opinion" />
        </Styled.FormItem>
        <Styled.ItemsContainer>
          {expectations.map((expectation) => (
            <Styled.Item
              $isActive={selectedExpectations.includes(expectation)}
              key={expectation}
              onClick={() => {
                handleExpectationClick(expectation);
              }}
            >
              {expectation}
            </Styled.Item>
          ))}
        </Styled.ItemsContainer>
        <Styled.Label>Would you like to add anything else?</Styled.Label>
        <Styled.FormItem name="additionalInfo">
          <Styled.TextArea
            showCount
            maxLength={200}
            style={{ height: 80, resize: "none" }}
            //onChange={onChange}
            placeholder="Write some additional information if you want"
          />
        </Styled.FormItem>
        <Styled.SubmitContainer>
          <Styled.FormItem>
            <Styled.Button type="primary" htmlType="submit" loading={isLoading}>
              Save & Next
            </Styled.Button>
          </Styled.FormItem>
        </Styled.SubmitContainer>
      </Styled.Form>
    </>
  );
};
