import * as Styled from "./StepContent.styled";

type StepContentProps = {
    content: string | JSX.Element;
};

export const StepContent = ({ content }: StepContentProps): JSX.Element => {
    return (
        <>
            <Styled.ContentContainer>{content}</Styled.ContentContainer>
        </>
    );
};

export default StepContent;
