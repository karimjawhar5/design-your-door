import {useEffect} from 'react'
import {Text, Box, Flex, Heading} from '@chakra-ui/react'

function DefineDoors({setCurrentDoor, nextDoor, currentDoor, setNextStep, doorDesigns}) {

  useEffect(()=>{
    if(currentDoor !== null){
      setNextStep("3-door-style");
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
              <Flex key={index} bgColor={currentDoor === index? 'orange.100' : 'gray.100'} border='1px' borderColor={currentDoor === index? 'orange.300' : 'gray.300'}  p={3} my={2} onClick={()=>handleDoorSelect(index)}>
                <Text size='md' flex={1} my='auto'>{`Garage Door ${index + 1}`}</Text>
              </Flex>
            ))
          }
        </Box>
  );
};
export default DefineDoors;
