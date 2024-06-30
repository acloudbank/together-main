import { NextPage } from "next";
import { UnauthenticatedLayout, WithAuthentication } from "../../../../common";
import {
  CheckMail,
  EmailLinkExpired,
  Logo,
  ResetPasswordForm,
  RequestPasswordResetForm,
} from "../../components";
import { useResetPasswordPage } from "./hooks";

import * as Styled from "./ResetPasswordPage.styled";

const ResetPasswordPage: WithAuthentication<NextPage> = () => {
  const { passwordResetToken, emailSentTo, setEmailSentTo, isLoading, errors } =
    useResetPasswordPage();

  const noResetTokenComponentsTitle = emailSentTo
    ? "Check your mail"
    : "Forgot Password?";
  const noResetTokenComponentsLogoBackgroundUrl = emailSentTo
    ? "/images/check-mail.jpg"
    : "/images/reset-password.jpg";
  const NoResetTokenComponents = emailSentTo ? (
    <CheckMail emailSentTo={emailSentTo} setEmailSentTo={setEmailSentTo} />
  ) : (
    <RequestPasswordResetForm setEmailSentTo={setEmailSentTo} />
  );

  const ResetTokenComponentsTitle = errors?.USER_AUTHENTICATION_ERROR
    ? "Reset password error"
    : "Reset password";
  const ResetTokenComponentsLogoBackgroundUrl = "/images/check-mail.jpg";
  const ResetTokenComponents = errors?.USER_AUTHENTICATION_ERROR ? (
    <EmailLinkExpired />
  ) : (
    <ResetPasswordForm passwordResetToken={passwordResetToken} />
  );

  const WithLoadingResetTokenComponents = isLoading ? "" : ResetTokenComponents;

  const title = !passwordResetToken
    ? noResetTokenComponentsTitle
    : ResetTokenComponentsTitle;

  const logoBackgroundUrl = !passwordResetToken
    ? noResetTokenComponentsLogoBackgroundUrl
    : ResetTokenComponentsLogoBackgroundUrl;

  return (
    <>
      <UnauthenticatedLayout
        Logo={Logo}
        logoBackgroundUrl={logoBackgroundUrl}
        logoTitle={title}
      >
        <Styled.PageContainer>
          {!passwordResetToken ? (
            <>{NoResetTokenComponents}</>
          ) : (
            <>{WithLoadingResetTokenComponents}</>
          )}
        </Styled.PageContainer>
      </UnauthenticatedLayout>
    </>
  );
};

ResetPasswordPage.requiresAuthentication = false;

export default ResetPasswordPage;
