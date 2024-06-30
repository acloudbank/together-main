import { NextPage } from "next";
import { UnauthenticatedLayout, WithAuthentication } from "../../../../common";
import { Logo, RegistrationForm, ZipCodeForm } from "../../components";
import {
  useRegistration,
  useRegistrationStep,
} from "modules/registration/hooks";

import * as Styled from "./RegistrationPage.styled";

const RegistrationPage: WithAuthentication<NextPage> = () => {
  const { currentStep, next } = useRegistrationStep();
  const {
    registrationForm,
    handleRegistrationFormChange,
    handleRegistrationFormSubmit,
    passwordStrengthScore,
    isRegistrationFormLoading,
    zipCodeForm,
    handleZipCodeFormChange,
    handleZipCodeFormSubmit,
    isAddingZipCodeLoading,
  } = useRegistration({ next });

  const steps = [
    {
      title: "Welcome to Together!",
      description: "It takes less than 2 minutes to sign up",
      content: (
        <RegistrationForm
          form={registrationForm}
          handleSubmit={handleRegistrationFormSubmit}
          handleValuesChange={handleRegistrationFormChange}
          passwordStrengthScore={passwordStrengthScore}
          isLoading={isRegistrationFormLoading}
        />
      ),
      logoBackgroundUrl: "/images/signup.jpg",
    },
    {
      title: "Last step!",
      description: "Set your location to see relevant issues",
      content: (
        <ZipCodeForm
          form={zipCodeForm}
          handleSubmit={handleZipCodeFormSubmit}
          handleValuesChange={handleZipCodeFormChange}
          isLoading={isAddingZipCodeLoading}
        />
      ),
      logoBackgroundUrl: "/images/signup.jpg",
    },
  ];

  return (
    <>
      <UnauthenticatedLayout
        Logo={Logo}
        logoBackgroundUrl={steps[currentStep].logoBackgroundUrl}
        logoTitle={steps[currentStep].title}
        logoDescription={steps[currentStep].description}
      >
        <Styled.PageContainer>
          {steps[currentStep].content}
        </Styled.PageContainer>
      </UnauthenticatedLayout>
    </>
  );
};

RegistrationPage.requiresAuthentication = false;

export default RegistrationPage;
