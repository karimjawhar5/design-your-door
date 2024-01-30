import './App.css';

import { useEffect, useState } from 'react';
import { Flex, Center } from '@chakra-ui/react'

import Content from './components/Content/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import useSteps from './hooks/useSteps'
import useDoorDesigns from './hooks/useDoorDesigns';

function App() {
  const { stepIndex, currentStep, setPrevStep, setNextStep, forward, backward, nextStep, prevStep } = useSteps();
  const doorDesigns = useDoorDesigns();
  const [doorGraphic, setDoorGraphic] = useState('/assets/door-graphics/design.jpg');
  const [mockupImage, setMockupImage] = useState(null)
  
  return (
    <Center className="App" h='100vh' w='100vw' bg='blue.100'>
      <Flex flexDirection="column" h="780px" w='1440px' overflow='hidden' bgColor='white'>
        <Header getCurrentStep = {currentStep} getStepIndex = {stepIndex}/>
        <Content getStepIndex = {stepIndex} getCurrentStep = {currentStep} setNextStep={setNextStep} setPrevStep={setPrevStep} doorDesigns = {doorDesigns} mockupImage = {mockupImage} setMockupImage = {setMockupImage}/>
        <Footer getNextStep = {nextStep} getPrevStep = {prevStep} forward={forward} backward={backward}/>
      </Flex>
    </Center>
  );
}

export default App;
