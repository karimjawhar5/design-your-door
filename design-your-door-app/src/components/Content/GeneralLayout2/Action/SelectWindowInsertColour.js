import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableWindowInsertColours = [
  ['blue', 'blue.300'],
  ['red', 'red.300'],
];

function SelectWindowInsertColour({ setWindowInsertColour, getWindowInsertColour, currentDoor, setNextStep }) {
  const [selectedColour, setSelectedColour] = useState(null);

  useEffect(() => {
    const windowInsertColour = getWindowInsertColour(currentDoor);
    if (windowInsertColour) {
      const indexOfColour = availableWindowInsertColours.findIndex(style => style[0] === windowInsertColour);
      setSelectedColour(indexOfColour);
        setNextStep("3-glass"); 
    }
  }, [selectedColour]);

  const handleSelect = (index) => {
    setSelectedColour(index);
    setWindowInsertColour(availableWindowInsertColours[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableWindowInsertColours.map((windowInsertColour, index) => (
          <SelectCard
            key={index}
            colour={windowInsertColour[1]}
            text={windowInsertColour[0]}
            isSelected={selectedColour === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectWindowInsertColour;
