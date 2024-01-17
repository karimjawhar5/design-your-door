import React from 'react'
import {useEffect, useState} from 'react'
import {Text, Box, Flex, Spacer, Center, Heading, Button, FormControl, Input, Select, FormLabel, FormErrorMessage, FormHelperText, CardBody, Alert, AlertIcon, AlertTitle, AlertDescription, Link} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'

function DefineDoors({setNextStep, setPrevStep, addDoorDesign, removeDoorDesign, setDoorSize, setDoorPosition, doorDesigns}) {
  
  const initDoorData = {
    wf: 0,
    wi: 0,
    hf: 0,
    hi: 0,
    shape: null,
    new: true,
    index: null
  };

  const [saveError, setSaveError] = useState(false);
  const [doorInProgress, setDoorInProgress] = useState(false);
  const [doorData, setDoorData] = useState(initDoorData);



  useEffect(()=>{
    setNextStep(null);
    if(doorDesigns.length > 0){
      setNextStep("3-design-door");
    }else{
      setNextStep(null);
    }
  }, [])

  useEffect(()=>{
    if(doorDesigns.length > 0){
      setNextStep("3-design-door");
    }else{
      setNextStep(null);
    }
  }, [doorDesigns])

  const handleGarageDoorEdit = (door, index) => {
    setDoorInProgress(true);
    console.log(door)
    setDoorData({
      wf: door.dimensions.length[0],
      wi: door.dimensions.length[1],
      hf: door.dimensions.height[0],
      hi: door.dimensions.height[1],
      shape: "straight",
      new: false,
      index: index
    })
  }

  const handleGarageDoorDelete = (index) => {
    removeDoorDesign(index);
  }

  const handleAddDoor = () => {
    setDoorInProgress(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveDoor = () => {
    // Check if all required data is selected before saving
    if (doorData.wf !== 0 && doorData.hf !== 0 && doorData.shape !== '') {
      // Perform save action here
      console.log('Door data saved:', doorData);
      // Reset the form and setDoorInProgress to false
      setDoorData(initDoorData);
      setSaveError(false);
      setDoorInProgress(false);
      if(doorData.new){
        addDoorDesign([parseInt(doorData.wf,10), parseInt(doorData.wi,10)],[parseInt(doorData.hf,10), parseInt(doorData.hi,10)]);
      }else{
        setDoorSize([doorData.wf, doorData.wi],[doorData.hf, doorData.hi], doorData.index );
        //handle shape too!
      }
    } else {
      setSaveError(true);
    }
  };

  return (
    <Box>
      {doorInProgress ? (
        <Box>
          <Heading size="sm">Set Door Size & Shape</Heading>
          {saveError? <Alert status='error' mt='3'>
            <AlertIcon />
            <AlertDescription>Please select a size & shape to save</AlertDescription>
          </Alert>:<></>}
          <FormControl mt="5">
            <Flex>
            <Box>
              <FormLabel>Width</FormLabel>
              <Flex>
              <Select placeholder="0'" onChange={handleInputChange} name='wf' value={doorData.wf} mr='3'>
                <option value={5}>5'</option>
                <option value={6}>6'</option>
                <option value={7}>7'</option>
                <option value={8}>8'</option>
                <option value={9}>9'</option>
                <option value={10}>10'</option>
                <option value={11}>11'</option>
                <option value={12}>12'</option>
                <option value={13}>13'</option>
                <option value={14}>14'</option>
                <option value={15}>15'</option>
                <option value={16}>16'</option>
                <option value={17}>17'</option>
                <option value={18}>18'</option>
              </Select>
              <Select onChange={handleInputChange} name='wi' value={doorData.wi}>
                  <option value={0}>0"</option>
                  <option value={2}>2"</option>
                  <option value={4}>4"</option>
                  <option value={6}>6"</option>
                  <option value={8}>8"</option>
              </Select>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <FormLabel>Height</FormLabel>
              <Flex>
              <Select placeholder="0'" onChange={handleInputChange} name='hf' value={doorData.hf} mr='3'>
                <option value={5}>5'</option>
                <option value={6}>6'</option>
                <option value={7}>7'</option>
                <option value={8}>8'</option>
                <option value={9}>9'</option>
                <option value={10}>10'</option>
                <option value={11}>11'</option>
                <option value={12}>12'</option>
              </Select>
              <Select onChange={handleInputChange} name='hi' value={doorData.hi}>
                  <option value={0}>0"</option>
                  <option value={2}>2"</option>
                  <option value={4}>4"</option>
                  <option value={6}>6"</option>
                  <option value={8}>8"</option>
              </Select>
              </Flex>
            </Box>
            </Flex>
            <Box mt="5">
              <FormLabel>Select Door Shape</FormLabel>
              <Select
                placeholder="Select Shape"
                name="shape"
                value={doorData.shape}
                onChange={handleInputChange}
              >
                <option value="straight">Straight</option>
                <option value="Arched">Arched</option>
              </Select>
            </Box>
            <Button mt="5" colorScheme="orange" onClick={handleSaveDoor}>
              Save
            </Button>
          </FormControl>
        </Box>
      ) : (
        <Box>
          <Heading size="sm">Your Garage Doors</Heading>
          {
            doorDesigns.map((door, index)=>(
              <Flex key={index} bgColor='gray.100' p={3} my={2}>
                <Text size='md' flex={1} my='auto'>{'Garage Door ' + (index+1)}</Text>
                <Center mr='1'>
                  <Link onClick={()=>handleGarageDoorEdit(door, index)} size='xs' colorScheme='orange'>edit</Link>
                </Center>
                <Text mr='1'>|</Text>
                <Center>
                  <Link onClick={()=>handleGarageDoorDelete(index)} color='red.500' size='xs' colorScheme='red'>delete</Link>
                </Center>
              </Flex>
            ))
          }
          <Button onClick={handleAddDoor} leftIcon={<AddIcon />} mt="5" size="sm">
            Add Garage Door
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default DefineDoors;