import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Center, Image, Heading } from '@chakra-ui/react'
import { HamburgerIcon, InfoIcon } from '@chakra-ui/icons'

function Header({getCurrentStep, getStepIndex}) {
  const [currentStep, setCurrentStep] = useState("");

  useEffect (()=>{
    const step = getCurrentStep();
    setCurrentStep(step);
  }, [getStepIndex])

    const getStepBoxStyle = (step) => {
        return {
          bg: currentStep.startsWith("" + step) ? 'orange.500' : 'gray.100',
          color: currentStep.startsWith("" + step) ? 'white' : 'black',
          border: '1px',
          borderColor: currentStep.startsWith("" + step) ? 'orange.600' : 'gray.300',
          flex: '1',
        };
      };

  return (
    <Box>
        <Flex px="5" borderBottom="1px" borderColor='gray.300' h='100px'>
            <Center pr="5" flex='1' borderRight="1px" borderColor='gray.300'>
                <Image src='/blogo.svg'></Image>
            </Center>

            <Flex px="8" py="3" flex="5" gap="2.5" borderRight="1px" borderColor="gray.300">
          <Center {...getStepBoxStyle(1)}>
            <Box>
              <Text size="sm">Step 1</Text>
              <Heading size="sm">House Image</Heading>
            </Box>
          </Center>
          <Center {...getStepBoxStyle(2)}>
            <Box>
              <Text size="sm">Step 2</Text>
              <Heading size="sm">Select Door</Heading>
            </Box>
          </Center>
          <Center {...getStepBoxStyle(3)}>
            <Box>
              <Text size="sm">Step 3</Text>
              <Heading size="sm">Design Door</Heading>
            </Box>
          </Center>
          <Center {...getStepBoxStyle(4)}>
            <Box>
              <Text size="sm">Step 4</Text>
              <Heading size="sm">Save & Request</Heading>
            </Box>
          </Center>
        </Flex>

            <Flex pl='5' py='3' flex='1' justifyContent="flex-end" gap='2.5'>
                <Center w='76px' bg='gray.100' color='black' border='1px' borderColor='gray.300'>
                    <HamburgerIcon boxSize={6}/>
                </Center>
                <Center w='76px' bg='gray.100' color='black' border='1px' borderColor='gray.300'>
                    <InfoIcon boxSize={6}/>
                </Center>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Header
