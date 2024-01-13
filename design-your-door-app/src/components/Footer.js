import React from 'react'
import { Flex, Button, Center} from '@chakra-ui/react'

function Footer({ currentStep, nextStep, prevStep, setPrevStep, forward, backward}) {
  const handleNext = ()=>{
    setPrevStep(currentStep)
    forward()
  }

  const handlePrev = ()=>{
    backward()
  }

  return (
    <div>
        <Flex px="5" borderTop="1px" borderColor='gray.300' h='80px' justifyContent='end'>
            <Center gap='2.5'>
                {prevStep ? <Button onClick={handlePrev} colorScheme='gray' variant='outline' size='lg' w="200px">Back</Button>: <></>}
                {nextStep ? <Button onClick={handleNext} colorScheme='orange' size='lg' w="200px" >Next</Button> : <Button colorScheme='orange' isDisabled={true} size='lg' w="200px">Next</Button> }
            </Center>
        </Flex>
    </div>
  )
}

export default Footer
