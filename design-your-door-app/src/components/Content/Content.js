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

function Content({getStepIndex, getCurrentStep, setNextStep, doorDesigns, mockupImage, setMockupImage, setJumpStep}) {

  const [currentStep, setCurrentStep] = useState("");
  const [currentDoor, setCurrentDoor] = useState(null);
  const [nextDoor, setNextDoor] = useState(null);
  
useEffect (()=>{
  if(nextDoor){
    setCurrentDoor(nextDoor);
    setNextDoor(null);
  }
    const step = getCurrentStep();
    setCurrentStep(step)
  }, [getStepIndex])

  const handleFinish = () => {
    const incompleteDoorDesign = doorDesigns.getIncompleteDoorDesign()
    if (incompleteDoorDesign){
      setNextDoor(incompleteDoorDesign)
      setJumpStep("3-design-door")
    }else{
      setNextStep()
    }
  }

  return (
    <Flex flex='1'>

      {currentStep == "1-mockup" &&  
      <GeneralLayout1 title="Choose House Image" text="Choose a preconfigured image, or upload you own." 
      action={<ImageSelect setMockupImage = {setMockupImage} setDoorPosition = {doorDesigns.setDoorPosition} addDoorDesign = {doorDesigns.addDoorDesign} clearDoorDesigns = {doorDesigns.clearDoorDesigns} setNextStep = {setNextStep}/>}
      />}

      {currentStep == "2-add-doors" &&  
      <GeneralLayout2 title="Add Your Garage Doors" text="Add a garage door for every garage door present on you image." 
      canvas = {<DoorPositioner mockupImage = {mockupImage} setDoorPosition = {doorDesigns.setDoorPosition} doorDesigns={doorDesigns.doorDesigns}/> } 
      action={<DefineDoors addDoorDesign = {doorDesigns.addDoorDesign} removeDoorDesign = {doorDesigns.removeDoorDesign} setDoorSize={doorDesigns.setDoorSize} doorDesigns={doorDesigns.doorDesigns} setNextStep = {setNextStep} />}
      />}

      {currentStep == "3-design-door" && <GeneralLayout2 title = "Select A Garage Door To Edit" text="Select one of the garage doors available to start designing. Don't worry, we'll come back here to edit the rest." 
      canvas = {<DoorOutline mockupImage = {mockupImage} currentDoor = {currentDoor} doorDesigns={doorDesigns.doorDesigns}/> } 
      action={<SelectDoor setCurrentDoor = {setCurrentDoor} currentDoor={currentDoor} setNextStep = {setNextStep} doorDesigns={doorDesigns.doorDesigns}/>}
      />}
      
      {currentStep == "3-door-style" && <GeneralLayout2 title = "Select A Door Style" text="Select one of the following garage door style to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectDoorStyle getDoorStyle={doorDesigns.getDoorStyle} setDoorStyle={doorDesigns.setDoorStyle} currentDoor={currentDoor} setNextStep = {setNextStep}/>}
      />}
      
      {currentStep == "3-door-type" && 
      <GeneralLayout2 title = "Select A Door Type" text="Select one of the following garage door types to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectDoorType getDoorType={doorDesigns.getDoorType} setDoorType={doorDesigns.setDoorType} currentDoor={currentDoor} setNextStep = {setNextStep}/>}
      />}
      
      {currentStep == "3-door-colour" && 
      <GeneralLayout2 title = "Select A Door Colour" text="Select one of the following garage door colours to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectDoorColour getDoorColour={doorDesigns.getDoorColour} setDoorColour={doorDesigns.setDoorColour} getDoorStyle={doorDesigns.getDoorStyle} currentDoor={currentDoor} setNextStep = {setNextStep}/>}
      />}
      
      {currentStep == "3-window-insert" &&
      <GeneralLayout2 title = "Select A Widow Layout" text="Select one of the following window layouts" 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> }
      action={<SelectWindowInsert setWindowInsert={doorDesigns.setWindowInsert} getWindowInsert={doorDesigns.getWindowInsert} currentDoor={currentDoor} setNextStep = {setNextStep}/>}
      />}

      {currentStep == "3-window-layout" &&
      <GeneralLayout2 title = "Select A Widow Layout" text="Select one of the following window layouts" 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> }
      action={<SelectWindowLayout getWindowLayout={doorDesigns.getWindowLayout} setWindowLayout={doorDesigns.setWindowLayout} currentDoor={currentDoor} setNextStep = {setNextStep}/>}
      />}

      {currentStep == "3-window-insert-colour" && 
      <GeneralLayout2 title = "Select A Window Insert Colour" text="Select one of the following window insert colours to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectWindowInsertColour getWindowInsertColour={doorDesigns.getWindowInsertColour} setWindowInsertColour={doorDesigns.setWindowInsertColour} currentDoor={currentDoor} setNextStep = {setNextStep} />}
      />}

      {currentStep == "3-glass" && 
      <GeneralLayout2 title = "Select A Glass Type" text="Select one of the following garage glass types to proceed." 
      canvas = {<DoorPreviewer mockupImage = {mockupImage} doorDesigns={doorDesigns.doorDesigns} currentDoor = {currentDoor}/> } 
      action={<SelectGlassType handleFinish = {handleFinish} getGlassType={doorDesigns.getGlass} setGlassType={doorDesigns.setGlass} currentDoor={currentDoor}/>}
      />}

      {currentStep == "4" && doorDesigns.isAllDoorDesignsReady ? <></>: <></>}


    </Flex>
  )
}
export default Content
