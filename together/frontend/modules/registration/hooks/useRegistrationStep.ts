import { useCallback, useState } from "react";

type UseLetterStepResult = {
  currentStep: number;
  next: () => void;
};

export function useRegistrationStep(): UseLetterStepResult {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [setCurrentStep, currentStep]);

  return { currentStep, next };
}
