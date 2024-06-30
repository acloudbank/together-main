import * as Styled from "./IssueDetailsStep.styled";
import { useIssueDetails } from "./hooks";
import { Affix } from "ui";
import { GetIssueByIdQuery, IssueFieldViewScale_Enum } from "generated-graphql";
import { ScaleTag } from "./components";

type IssueDetailsStepProps = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

export const IssueDetailsStep = ({
  handleNext,
  issue,
}: IssueDetailsStepProps): JSX.Element => {
  const {
    form,
    handleChange,
    selectedScaleTags,
    handleScaleTagChange,
    handleSubmit,
  } = useIssueDetails({ handleNext, issue });

  const renderScaleTags = () => {
    return Object.values(IssueFieldViewScale_Enum).map((tag) => (
      <ScaleTag
        key={tag}
        tag={tag}
        selected={selectedScaleTags === tag}
        onChange={(checked) => handleScaleTagChange(tag, checked)}
      />
    ));
  };

  return (
    <>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        {/* TODO: PhotoUploader field will be tackled in the next scope  */}

        {/* <Styled.FormItem
          name="Photo"
          rules={[{ required: true, message: "Please upload a photo!" }]}
          >
          <PhotoUploader />
        </Styled.FormItem> */}

        <Styled.Header>Subject of your issue</Styled.Header>
        <Styled.FormItem
          name="Subject"
          rules={[{ required: true, message: "Please input issue topic!" }]}
        >
          <Styled.Input placeholder="Type the title of your issue" />
        </Styled.FormItem>

        <Styled.Header>Describe your issue</Styled.Header>
        <Styled.FormItem
          name="IssueBody"
          rules={[{ required: true, message: "Please describe your problem!" }]}
        >
          <Styled.TextArea
            placeholder="Describe your issue"
            style={{ height: 100, resize: "none" }}
            showCount={true}
            maxLength={500}
          />
        </Styled.FormItem>
        <Styled.Header>Article link</Styled.Header>
        <Styled.FormItem name="Link">
          <Styled.Input
            placeholder="Paste the link"
            prefix={<Styled.LinkOutlined />}
          />
        </Styled.FormItem>

        <Styled.Header>Scale the field of view</Styled.Header>
        <Styled.FormItem
          name="ScaleField"
          rules={[{ required: true, message: "Please scale field of view!" }]}
        >
          <Styled.TagContainer>{renderScaleTags()}</Styled.TagContainer>
        </Styled.FormItem>

        <Styled.SubmitContainer>
          <Affix>
            <Styled.FormItem>
              <Styled.Button type="primary" htmlType="submit">
                Save & Next
              </Styled.Button>
            </Styled.FormItem>
          </Affix>
        </Styled.SubmitContainer>
      </Styled.Form>
    </>
  );
};
