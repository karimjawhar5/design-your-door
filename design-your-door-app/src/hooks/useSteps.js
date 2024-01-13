import { useState } from "react";

const useSteps = () => {
  const [currentStep, setCurrentStep] = useState("1-mockup");
  const [prevStep, setPrevStep] = useState(null);
  const [nextStep, setNextStep] = useState(null);

  const forward = () => {
      setCurrentStep(nextStep);
  };

  const backward = () => {
    setCurrentStep(prevStep);
  };

  return {
    currentStep,
    setPrevStep,
    prevStep,
    setNextStep,
    nextStep,
    forward,
    backward
  };
};

export default useSteps;
