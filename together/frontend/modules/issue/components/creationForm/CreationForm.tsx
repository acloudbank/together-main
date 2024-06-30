import * as Styled from "./CreationForm.styled";
import { StepContent } from "./components";

type Step = {
  title: string;
  content: string | JSX.Element;
};

type Props = {
  steps: Step[];
  step: number;
  hasHideSteps: boolean;
};

export const CreationForm = ({
  steps,
  step,
  hasHideSteps,
}: Props): JSX.Element => {
  return (
    <>
      {hasHideSteps ? null : (
        <Styled.ProgressContainer>
          <Styled.StepIndicator>
            {steps.map((_, index) => (
              <Styled.StepSpan
                key={index}
                className={step >= index ? "completed" : ""}
              ></Styled.StepSpan>
            ))}
          </Styled.StepIndicator>
          <Styled.Title level={2}>{steps[step]?.title}</Styled.Title>
        </Styled.ProgressContainer>
      )}
      <Styled.StepContainer>
        <StepContent content={steps[step]?.content} />
      </Styled.StepContainer>
    </>
  );
};
