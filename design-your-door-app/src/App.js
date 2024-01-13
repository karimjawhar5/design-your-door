import './App.css';

import { useState } from 'react';
import { Flex } from '@chakra-ui/react'

import Content from './components/Content/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import useSteps from './hooks/useSteps'
import useDoorDesigns from './hooks/useDoorDesigns';

function App() {
  const { currentStep, setPrevStep, setNextStep, forward, backward, nextStep, prevStep } = useSteps();
  const doorDesigns = useDoorDesigns();
  const [doorGraphic, setDoorGraphic] = useState('/assets/door-graphics/design.jpg');
  const [mockupImage, setMockupImage] = useState(null)
  
  return (
    <div className="App">
      <Flex flexDirection="column" maxH="100vh">
        <Header currentStep = {currentStep}/>
        <Content currentStep = {currentStep} setNextStep={setNextStep} setPrevStep={setPrevStep} doorDesigns = {doorDesigns} mockupImage = {mockupImage} setMockupImage = {setMockupImage}/>
        <Footer currentStep = {currentStep} nextStep = {nextStep} prevStep = {prevStep} setPrevStep={setPrevStep} forward={forward} backward={backward}/>
      </Flex>
    </div>
  );
}

export default App;
