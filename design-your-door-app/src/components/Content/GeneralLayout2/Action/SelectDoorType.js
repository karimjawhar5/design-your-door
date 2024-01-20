import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableDoorTypes = [
  ['short', '/assets/design/type/short.jpg'],
  ['long', '/assets/design/type/long.jpg'], // Corrected image paths
];

function SelectDoorType({ setDoorType, getDoorType, currentDoor, setNextStep }) {
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const doorType = getDoorType(currentDoor);
    if (doorType) {
      const indexOfType = availableDoorTypes.findIndex(style => style[0] === doorType);
      setSelectedType(indexOfType);
      setNextStep("3-door-colour");
    } else {
      setNextStep(null);
    }
  }, [currentDoor, getDoorType, setNextStep]);

  const handleSelect = (index) => {
    setSelectedType(index);
    setDoorType(availableDoorTypes[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableDoorTypes.map((doorType, index) => (
          <SelectCard
            key={index}
            image={doorType[1]}
            text={doorType[0]}
            isSelected={selectedType === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectDoorType;
