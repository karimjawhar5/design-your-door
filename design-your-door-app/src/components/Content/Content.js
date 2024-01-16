import React from 'react'
import { Flex } from '@chakra-ui/react'
import GeneralLayout1 from './GeneralLayout1/GeneralLayout1'
import GeneralLayout2 from './GeneralLayout2/GeneralLayout2'

import ImageSelect from './GeneralLayout1/ImageSelect'
import Canvas1 from './GeneralLayout2/Canvas/Canvas1'
import DefineDoors from './GeneralLayout2/Action/DefineDoors'

function Content({currentStep, setNextStep, setPrevStep, doorDesigns, mockupImage, setMockupImage}) {

  return (
    <Flex flex='1'>
      {currentStep == "1-mockup" &&  <GeneralLayout1 title="Choose House Image" text="Choose a preconfigured image, or upload you own." action={<ImageSelect setMockupImage = {setMockupImage} mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition} setNextStep = {setNextStep} setPrevStep = {setPrevStep} addDoorDesign = {doorDesigns.addDoorDesign} clearDoorDesigns = {doorDesigns.clearDoorDesigns}/>}/>}
      {currentStep == "2-add-doors" &&  <GeneralLayout2 title="Add Your Garage Doors" text="Add a garage door for every garage door present on you image." canvas = {<Canvas1 mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition}/>} action={<DefineDoors setNextStep = {setNextStep} setPrevStep = {setPrevStep} addDoorDesign = {doorDesigns.addDoorDesign} removeDoorDesign = {doorDesigns.removeDoorDesign} setDoorSize={doorDesigns.setDoorSize} setDoorPosition = {doorDesigns.setDoorPosition} doorDesigns={doorDesigns.doorDesigns}/>}/>}
    </Flex>
  )
}
export default Content
