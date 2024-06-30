import * as Styled from "./WriteComment.styled";
import { useWriteComment } from "./hooks";

type WriteCommentProps = {
  selectedCommentId?: string;
};

export const WriteComment = ({selectedCommentId}: WriteCommentProps): JSX.Element => {
  const {
    form,
    handleChange,
    handleSubmit,
    insertIsLoading
  } = useWriteComment({selectedCommentId});

  return (
    <>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <Styled.FormItem
          name="Attachement"
        >
          <Styled.AttachementIcon />
        </Styled.FormItem>
        <Styled.FormItem
          name="Content"
          rules={[{ required: true, message: "Please input comment!" }]}
        >
          <Styled.Input placeholder="Write comment" />
        </Styled.FormItem>
        <Styled.SubmitContainer>
          <Styled.JoinButton shape="round" htmlType="submit" loading={insertIsLoading}>Send</Styled.JoinButton>
        </Styled.SubmitContainer>
      </Styled.Form>
    </>
  );
};
