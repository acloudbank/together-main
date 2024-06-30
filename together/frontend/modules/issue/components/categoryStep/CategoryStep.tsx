import * as Styled from "./CategoryStep.styled";
import { useCategoryStep } from "./hooks";
import { Affix } from "ui";
import { GetIssueByIdQuery, IssueCategory_Enum } from "generated-graphql";
import { CategoryTag } from "./components";

type IssueDetailsStepProps = {
  handleNext: (id?: string) => void;
  issue?: GetIssueByIdQuery;
};

export const CategoryStep = ({
  handleNext,
  issue,
}: IssueDetailsStepProps): JSX.Element => {
  const { form, selectedCategory, handleCategoryChange, handleSubmit } =
    useCategoryStep({ handleNext, issue });

  const renderCategories = () => {
    return Object.values(IssueCategory_Enum)
      .map((value) => value.replace("_", " "))
      .map((category) => (
        <CategoryTag
          key={category}
          tag={category}
          selected={selectedCategory === category}
          onChange={(checked) => handleCategoryChange(category, checked)}
        />
      ));
  };

  return (
    <>
      <Styled.Form form={form} onFinish={handleSubmit}>
        <Styled.FormItem
          name="Category"
          rules={[{ required: true, message: "Please select category!" }]}
        >
          <Styled.CategoryTagContainer>
            {renderCategories()}
          </Styled.CategoryTagContainer>
        </Styled.FormItem>

        <Styled.SubmitContainer>
          <Affix offsetBottom={32}>
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
