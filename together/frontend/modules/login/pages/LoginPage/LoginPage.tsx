import { NextPage } from "next";
import { UnauthenticatedLayout, WithAuthentication } from "../../../../common";
import { Logo, LoginForm } from "../../components";

import * as Styled from "./LoginPage.styled";

const LoginPage: WithAuthentication<NextPage> = () => {
  return (
    <>
      <UnauthenticatedLayout
        Logo={Logo}
        logoBackgroundUrl="/images/signup.jpg"
        logoTitle="Welcome back to Together!"
        logoDescription="It takes less than a minute to log in"
      >
        <Styled.PageContainer>
          <LoginForm />
        </Styled.PageContainer>
      </UnauthenticatedLayout>
    </>
  );
};

LoginPage.requiresAuthentication = false;

export default LoginPage;
