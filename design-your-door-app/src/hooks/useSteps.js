import { useState } from "react";

const useSteps = () => {
  const [steps, setSteps] = useState(["1-mockup"]);
  const [stepIndex, setStepIndex] = useState(0);
  const [jumpStep, setJumpStep] = useState(null);

  function splitArrayAtString(array, splitter) {
    let result = [];
    let currentSubArray = [];

    array.forEach(item => {
        if (item === splitter) {
            if (currentSubArray.length > 0) {
                result.push(currentSubArray);
                currentSubArray = [];
            }
        } else {
            currentSubArray.push(item);
        }
    });

    if (currentSubArray.length > 0) {
        result.push(currentSubArray);
    }

    return result;
}

  const forward = () => {
    if (jumpStep){
      const newSteps = splitArrayAtString(jumpStep);
      setSteps(newSteps);
      setStepIndex(newSteps.length - 1);
    }else{
      const newStepIndex = stepIndex + 1;
    if(steps.length > newStepIndex){
      setStepIndex(newStepIndex);
    }else{
      console.log("No next step available");
    }
    }
  };

  const backward = () => {
    if(stepIndex > 0){
      const newStepIndex = stepIndex - 1;
      const newSteps = steps.slice(0, newStepIndex+1)
      setStepIndex(newStepIndex);
      setSteps(newSteps);
    }else{
      console.log("No previuse step available")
    }
  };

  const setNextStep = (stepName) => {
      const newSteps = [...steps.slice(0, stepIndex+1), stepName];
      setSteps(newSteps);
  }

  const currentStep = () => {
    return steps[stepIndex]
  }

  const prevStep = () => {
    let prev = null
    stepIndex === 0 ? prev = null : prev = steps[stepIndex-1];
    return prev;
  }

  const nextStep = () => {
    let next = null
    stepIndex === (steps.length-1) ? next = null : next = steps[stepIndex+1];
    return next;
  }

  return {
    stepIndex,
    currentStep,
    prevStep,
    setNextStep,
    nextStep,
    forward,
    backward,
    setJumpStep
  };
};

export default useSteps;
