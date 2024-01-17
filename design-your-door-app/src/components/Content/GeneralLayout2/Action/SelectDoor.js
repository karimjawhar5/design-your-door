import React from 'react'
import {useEffect} from 'react'
import {Text, Box, Flex, Spacer, Center, Heading, Button, FormControl, Input, Select, FormLabel, FormErrorMessage, FormHelperText, CardBody, Alert, AlertIcon, AlertTitle, AlertDescription, Link} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'

function DefineDoors({setCurrentDoor, currentDoor, setNextStep, setPrevStep, doorDesigns}) {

  useEffect(()=>{
    setNextStep(null);
    setCurrentDoor(null);
  }, [])

  useEffect(()=>{
    if(currentDoor !== null){
        setNextStep("3-door-style");
    }else{
        setNextStep(null);
    }
  }, [currentDoor])

  const handleDoorSelect = (index) => {
    setCurrentDoor(index);
  }

  return (
        <Box>
          <Heading size="sm">Your Garage Doors</Heading>
          {
            doorDesigns.map((door, index)=>(
              <Flex key={index} bgColor={currentDoor == index? 'orange.100' : 'gray.100'} border='1px' borderColor={currentDoor == index? 'orange.300' : 'gray.300'}  p={3} my={2} onClick={()=>handleDoorSelect(index)}>
                <Text size='md' flex={1} my='auto'>{'Garage Door ' + (index+1)}</Text>
              </Flex>
            ))
          }
        </Box>
  );
};
export default DefineDoors;
