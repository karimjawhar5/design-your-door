import React from 'react'
import { Center, Flex, Heading, Text, Box } from '@chakra-ui/react'

function GeneralLayout1({title, text, action}) {
  return (
    <Flex flex='1' flexDirection='column'>
        <Center px='10' height='120px' flexDirection='column' alignItems='left' borderBottom="1px" borderColor='gray.300' >
            <Heading size='lg'>{title}</Heading>
            <Text pt='2.5'size='lg'>{text}</Text>
        </Center>
        <Flex h='479'>
            {action}
        </Flex>
    </Flex>
  )
}

export default GeneralLayout1
