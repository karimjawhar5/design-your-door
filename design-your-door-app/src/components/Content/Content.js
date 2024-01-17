import React from 'react'
import {useState} from 'react';
import { Flex } from '@chakra-ui/react'
import GeneralLayout1 from './GeneralLayout1/GeneralLayout1'
import GeneralLayout2 from './GeneralLayout2/GeneralLayout2'

import ImageSelect from './GeneralLayout1/ImageSelect'
import Canvas1 from './GeneralLayout2/Canvas/Canvas1'
import DefineDoors from './GeneralLayout2/Action/DefineDoors'
import DoorPositioner from './GeneralLayout2/Canvas/DoorPositioner'
import DoorOutline from './GeneralLayout2/Canvas/DoorOutline'
import SelectDoor from './GeneralLayout2/Action/SelectDoor'
import DoorPreviewer from './GeneralLayout2/Canvas/DoorPreviewer'
import SelectDoorStyle from './GeneralLayout2/Action/SelectDoorStyle'

function Content({currentStep, setNextStep, setPrevStep, doorDesigns, mockupImage, setMockupImage}) {

  const [currentDoor, setCurrentDoor] = useState();

  return (
    <Flex flex='1'>
      {currentStep == "1-mockup" &&  <GeneralLayout1 title="Choose House Image" text="Choose a preconfigured image, or upload you own." action={<ImageSelect setMockupImage = {setMockupImage} mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition} setNextStep = {setNextStep} setPrevStep = {setPrevStep} addDoorDesign = {doorDesigns.addDoorDesign} clearDoorDesigns = {doorDesigns.clearDoorDesigns}/>}/>}
      {currentStep == "2-add-doors" &&  <GeneralLayout2 title="Add Your Garage Doors" text="Add a garage door for every garage door present on you image." canvas = {<DoorPositioner mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition} doorDesigns={doorDesigns.doorDesigns}/> } action={<DefineDoors setNextStep = {setNextStep} setPrevStep = {setPrevStep} addDoorDesign = {doorDesigns.addDoorDesign} removeDoorDesign = {doorDesigns.removeDoorDesign} setDoorSize={doorDesigns.setDoorSize} setDoorPosition = {doorDesigns.setDoorPosition} doorDesigns={doorDesigns.doorDesigns}/>}/>}
      {currentStep == "3-design-door" && <GeneralLayout2 title = "Select A Garage Door To Edit" text="Select one of the garage doors available to start designing. Don't worry, we'll come back here to edit the rest." canvas = {<DoorOutline mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } action={<SelectDoor setCurrentDoor = {setCurrentDoor} currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} doorDesigns={doorDesigns.doorDesigns}/>}/>}
      {currentStep == "3-door-style" && <GeneralLayout2 title = "Select A Door Style" text="Select one of the following garage door style to proceed." canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } action={<SelectDoorStyle currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} doorDesigns={doorDesigns.doorDesigns} setDoorStyle={doorDesigns.setDoorStyle}/>}/>}
    </Flex>
  )
}
export default Content
