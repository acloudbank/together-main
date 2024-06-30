import { GetLetterByIdQuery, Language_Enum } from "generated-graphql";
import * as Styled from "./PersonalizeStep.styled";
import { usePersonalizeStep } from "./hooks";

type Props = {
  next: (id?: string) => void;
  letter?: GetLetterByIdQuery;
};

export const PersonalizeStep = ({ next, letter }: Props): JSX.Element => {
  const {
    form,
    handleChange,
    isLoading,
    handleSubmit,
    language,
    handleLanguageValueChange,
  } = usePersonalizeStep({
    next,
    letter,
  });
  return (
    <>
      <Styled.Header>Personalize your letter</Styled.Header>
      <Styled.Form
        form={form}
        onValuesChange={handleChange}
        onFinish={handleSubmit}
      >
        <Styled.FormItem
          name="name"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Styled.Input placeholder="Name" />
        </Styled.FormItem>
        <Styled.FormItem
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Styled.Input placeholder="Surname" />
        </Styled.FormItem>
        <Styled.FormInstruction>
          Set your address to find right representatives
        </Styled.FormInstruction>
        <Styled.InlineFormItemContainer>
          <Styled.FormItem
            style={{ marginRight: `4px` }}
            name="state"
            rules={[{ required: true, message: "Please input your state!" }]}
          >
            <Styled.Input placeholder="State" />
          </Styled.FormItem>
          <Styled.FormItem
            style={{ marginLeft: "4px" }}
            name="city"
            rules={[{ required: true, message: "Please input city!" }]}
          >
            <Styled.Input placeholder="City" />
          </Styled.FormItem>
        </Styled.InlineFormItemContainer>
        <Styled.FormItem
          name="street"
          rules={[{ required: true, message: "Please input your street!" }]}
        >
          <Styled.Input placeholder="Street" />
        </Styled.FormItem>
        <Styled.FormItem
          name="unit"
          rules={[
            {
              required: true,
              message: "Please input your Apt. / Suit / Unit!",
            },
          ]}
        >
          <Styled.Input placeholder="Apt. / Suit / Unit!" />
        </Styled.FormItem>

        <Styled.FormInstruction>
          Select the language of your letter
        </Styled.FormInstruction>
        <Styled.RadioGroup
          onChange={handleLanguageValueChange}
          value={language}
        >
          <Styled.Space direction="vertical" size={0}>
            <Styled.RadioContainer>
              <Styled.Radio value={Language_Enum.English}>
                <Styled.FlagContainer>
                  <Styled.UkFlag />
                  <Styled.BodyRegular>English</Styled.BodyRegular>
                </Styled.FlagContainer>
              </Styled.Radio>
            </Styled.RadioContainer>

            <Styled.RadioContainer>
              <Styled.Radio value={Language_Enum.FrenchCanadian}>
                <Styled.FlagContainer>
                  <Styled.FranceFlag />
                  <Styled.BodyRegular>French (Canadian)</Styled.BodyRegular>
                </Styled.FlagContainer>
              </Styled.Radio>
            </Styled.RadioContainer>
          </Styled.Space>
        </Styled.RadioGroup>

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
