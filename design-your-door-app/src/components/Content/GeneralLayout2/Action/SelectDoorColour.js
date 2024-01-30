import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableDoorColours = [
  ['red', 'red.300'],
  ['blue', 'blue.300'], // Corrected image paths
];

function SelectDoorColour({ setDoorColour, getDoorColour, currentDoor, setNextStep, getDoorStyle }) {
  const [selectedColour, setSelectedColour] = useState(null);

  useEffect(() => {
    const doorColour = getDoorColour(currentDoor);
    if (doorColour) {
      const indexOfColour = availableDoorColours.findIndex(style => style[0] === doorColour);
      setSelectedColour(indexOfColour);
      if(getDoorStyle(currentDoor)== "flush") {
        setNextStep("3-window-layout");
      }else{
        setNextStep("3-window-insert");
      }
      
      
    }
  }, [currentDoor, getDoorColour, setNextStep]);

  const handleSelect = (index) => {
    setSelectedColour(index);
    setDoorColour(availableDoorColours[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableDoorColours.map((doorColour, index) => (
          <SelectCard
            key={index}
            colour={doorColour[1]}
            text={doorColour[0]}
            isSelected={selectedColour === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectDoorColour;
