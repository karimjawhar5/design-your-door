import {useEffect, useState} from 'react'
import {Box, Flex, Grid} from '@chakra-ui/react'

function SelectDoorStyle({setDoorStyle, currentDoor, setNextStep, setPrevStep, doorDesigns}) {

    useEffect(()=>{
        setNextStep(null);
    }, []);

  return (
    <Box>

    </Box>
  )
}

export default SelectDoorStyle
