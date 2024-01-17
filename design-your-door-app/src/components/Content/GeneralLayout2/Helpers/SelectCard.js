import {Box, Text, Image, Center} from '@chakra-ui/react'
import React from 'react'

function SelectCard({image, colour, text, isSelected, onClick}) {
  return (
    <Box bg={isSelected ? 'orange.100' : 'gray.100'} border='1px' borderColor={isSelected ? 'orange.300' : 'gray.300'} p='2' onClick={onClick}>
        {image ?
            <Center>
            <Image src={image} w='100%' mb='2'/>
        </Center> :
        <Center>
        <Box bgColor={colour} w='100%' h='100px' mb='2'></Box>
    </Center>
        }
        <Center>
            <Text size='sm'> {text} </Text>
        </Center>
    </Box>
  )
}

export default SelectCard
