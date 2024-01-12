import React from 'react'
import { Flex } from '@chakra-ui/react'
import GeneralLayout1 from './GeneralLayout1/GeneralLayout1'
import GeneralLayout2 from './GeneralLayout2/GeneralLayout2'

import ImageSelect from './GeneralLayout1/ImageSelect'
import Canvas1 from './GeneralLayout2/Canvas/Canvas1'
import Action1 from './GeneralLayout2/Action/Action1'

function Content({currentStep, setCurrentStepComplete, doorDesigns, mockupImage, setMockupImage}) {

  return (
    <Flex flex='1'>
      {currentStep == 1 &&  <GeneralLayout1 title="Choose House Image" text="Choose a preconfigured image, or upload you own." action={<ImageSelect setMockupImage = {setMockupImage} mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition} setCurrentStepComplete = {setCurrentStepComplete}/>}/>}
      {currentStep == 2 &&  <GeneralLayout2 title="Choose House Image" text="Choose a preconfigured image, or upload you own." action={<Action1/>} canvas={<Canvas1/>}/>}
    </Flex>
  )
}
export default Content
