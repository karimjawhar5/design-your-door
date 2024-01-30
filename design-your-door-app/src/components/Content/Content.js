import {useState, useEffect} from 'react';
import { Flex } from '@chakra-ui/react'
import GeneralLayout1 from './GeneralLayout1/GeneralLayout1'
import GeneralLayout2 from './GeneralLayout2/GeneralLayout2'

import ImageSelect from './GeneralLayout1/ImageSelect'

import DefineDoors from './GeneralLayout2/Action/DefineDoors'
import DoorPositioner from './GeneralLayout2/Canvas/DoorPositioner'
import DoorOutline from './GeneralLayout2/Canvas/DoorOutline'

import SelectDoor from './GeneralLayout2/Action/SelectDoor'
import DoorPreviewer from './GeneralLayout2/Canvas/DoorPreviewer'

import SelectDoorStyle from './GeneralLayout2/Action/SelectDoorStyle'
import SelectDoorType from './GeneralLayout2/Action/SelectDoorType'
import SelectDoorColour from './GeneralLayout2/Action/SelectDoorColour'
import SelectWindowInsert from './GeneralLayout2/Action/SelectWindowInsert'
import SelectWindowInsertColour from './GeneralLayout2/Action/SelectWindowInsertColour'
import SelectWindowLayout from './GeneralLayout2/Action/SelectWindowLayout'
import SelectGlassType from './GeneralLayout2/Action/SelectGlassType'

function Content({getStepIndex, getCurrentStep, setNextStep, setPrevStep, doorDesigns, mockupImage, setMockupImage}) {

  const [currentStep, setCurrentStep] = useState("");
  const [currentDoor, setCurrentDoor] = useState(null);
  
useEffect (()=>{
    const step = getCurrentStep();
    setCurrentStep(step)
  }, [getStepIndex])

  return (
    <Flex flex='1'>

      {currentStep == "1-mockup" &&  
      <GeneralLayout1 title="Choose House Image" text="Choose a preconfigured image, or upload you own." 
      action={<ImageSelect setMockupImage = {setMockupImage} setDoorPosition = {doorDesigns.setDoorPosition} addDoorDesign = {doorDesigns.addDoorDesign} clearDoorDesigns = {doorDesigns.clearDoorDesigns} setNextStep = {setNextStep}/>}
      />}

      {currentStep == "2-add-doors" &&  
      <GeneralLayout2 title="Add Your Garage Doors" text="Add a garage door for every garage door present on you image." 
      canvas = {<DoorPositioner mockupImage = {mockupImage} getDoorPosition = {doorDesigns.getDoorPosition} setDoorPosition = {doorDesigns.setDoorPosition} doorDesigns={doorDesigns.doorDesigns}/> } 
      action={<DefineDoors addDoorDesign = {doorDesigns.addDoorDesign} removeDoorDesign = {doorDesigns.removeDoorDesign} setDoorSize={doorDesigns.setDoorSize} doorDesigns={doorDesigns.doorDesigns} setNextStep = {setNextStep} />}
      />}

      {currentStep == "3-design-door" && <GeneralLayout2 title = "Select A Garage Door To Edit" text="Select one of the garage doors available to start designing. Don't worry, we'll come back here to edit the rest." canvas = {<DoorOutline mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } action={<SelectDoor setCurrentDoor = {setCurrentDoor} currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} doorDesigns={doorDesigns.doorDesigns}/>}/>}
      {currentStep == "3-door-style" && <GeneralLayout2 title = "Select A Door Style" text="Select one of the following garage door style to proceed." canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } action={<SelectDoorStyle currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getDoorStyle={doorDesigns.getDoorStyle} setDoorStyle={doorDesigns.setDoorStyle}/>}/>}
      
      {currentStep == "3-door-type" && 
      <GeneralLayout2 title = "Select A Door Type" text="Select one of the following garage door types to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectDoorType currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getDoorType={doorDesigns.getDoorType} setDoorType={doorDesigns.setDoorType}/>}
      />}
      
      {currentStep == "3-door-colour" && 
      <GeneralLayout2 title = "Select A Door Colour" text="Select one of the following garage door colours to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectDoorColour currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getDoorColour={doorDesigns.getDoorColour} setDoorColour={doorDesigns.setDoorColour} getDoorStyle={doorDesigns.getDoorStyle}/>}
      />}
      
      {currentStep == "3-window-insert" &&
      <GeneralLayout2 title = "Select A Widow Layout" text="Select one of the following window layouts" 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> }
      action={<SelectWindowInsert currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getWindowInsert={doorDesigns.getWindowInsert} setWindowInsert={doorDesigns.setWindowInsert}/>}
      />}

      {currentStep == "3-window-layout" &&
      <GeneralLayout2 title = "Select A Widow Layout" text="Select one of the following window layouts" 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> }
      action={<SelectWindowLayout currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getWindowLayout={doorDesigns.getWindowLayout} setWindowLayout={doorDesigns.setWindowLayout}/>}
      />}

      {currentStep == "3-window-insert-colour" && 
      <GeneralLayout2 title = "Select A Window Insert Colour" text="Select one of the following window insert colours to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectWindowInsertColour currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getWindowInsertColour={doorDesigns.getWindowInsertColour} setWindowInsertColour={doorDesigns.setWindowInsertColour}/>}
      />}

      {currentStep == "3-glass" && 
      <GeneralLayout2 title = "Select A Glass Type" text="Select one of the following garage glass types to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectGlassType currentDoor={currentDoor} setNextStep = {setNextStep} setPrevStep = {setPrevStep} getGlassType={doorDesigns.getGlass} setGlassType={doorDesigns.setGlass}/>}
      />}


    </Flex>
  )
}
export default Content
