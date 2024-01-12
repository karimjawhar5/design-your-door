import './App.css';

import { useState } from 'react';
import { Flex } from '@chakra-ui/react'

import Content from './components/Content/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import useSteps from './hooks/useSteps'
import useDoorDesigns from './hooks/useDoorDesigns';

function App() {
  const { currentStep, nextStep, prevStep, currentStepComplete, setCurrentStepComplete } = useSteps();
  const doorDesigns = useDoorDesigns();
  const [doorGraphic, setDoorGraphic] = useState('/assets/door-graphics/design.jpg');
  const [mockupImage, setMockupImage] = useState('/asssets/house-images/mockup1.jpg')
  
  return (
    <div className="App">
      <Flex flexDirection="column" maxH="100vh">
        <Header currentStep = {currentStep}/>
        <Content currentStep = {currentStep} setCurrentStepComplete={setCurrentStepComplete} doorDesigns = {doorDesigns} mockupImage = {mockupImage} setMockupImage = {setMockupImage}/>
        <Footer nextStep = {nextStep} prevStep = {prevStep} currentStepComplete = {currentStepComplete}/>
      </Flex>
    </div>
  );
}

export default App;
