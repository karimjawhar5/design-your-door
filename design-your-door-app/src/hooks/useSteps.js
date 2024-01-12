import { useState } from "react";

const useSteps = () => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [currentStepComplete, setCurrentStepComplete] = useState(false);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    currentStepComplete,
    setCurrentStepComplete,
  };
};

export default useSteps;
