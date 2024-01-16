import React from 'react'
import { Center, Flex, Heading, Text, Box } from '@chakra-ui/react'

function GeneralLayout2({title, text, action, canvas}) {
  return (
    <Flex flex='1'>
      <Flex flex='1'>
        {canvas}
      </Flex>
      <Flex h='599px' width='400px' flexDirection='column' borderLeft="1px" borderColor='gray.300'>
        <Center flex='1' py='3' px='5' flexDirection='column' alignItems='left' borderBottom="1px" borderColor='gray.300' >
            <Heading size='md'>{title}</Heading>
            <Text pt='2.5'size='md'>{text}</Text>
        </Center>
        <Box flex='3' px='5' py='5' flexDirection='column' alignItems='left' >
            {action}
        </Box>
      </Flex>
    </Flex>
  )
}

export default GeneralLayout2
