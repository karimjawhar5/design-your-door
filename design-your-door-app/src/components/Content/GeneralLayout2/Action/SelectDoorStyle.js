import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableDoorStyles = [
  ['raised', '/assets/design/styles/raised.jpg'],
  ['carriage', '/assets/design/styles/carriage.jpg'], // Corrected image paths
  ['flush', '/assets/design/styles/flush.jpg'], // Corrected image paths
];

function SelectDoorStyle({ getDoorStyle, setDoorStyle, currentDoor, setNextStep}) {
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(null);

  useEffect(() => {
    const doorStyle = getDoorStyle(currentDoor);
    if (doorStyle) {
      updateSelectedStyle(doorStyle);
    }
  }, [currentDoor]);

  const updateSelectedStyle = (doorStyle) => {
    const indexOfStyle = availableDoorStyles.findIndex(style => style[0] === doorStyle);
    setSelectedStyleIndex(indexOfStyle);
    updateNextStepBasedOnStyle(doorStyle);
  };

  const updateNextStepBasedOnStyle = (style) => {
    setNextStep(style !== 'flush' ? "3-door-type" : "3-door-colour");
  };

  const handleSelect = (index) => {
    const selectedStyleIndex = availableDoorStyles[index][0];
    setSelectedStyleIndex(index);
    setDoorStyle(selectedStyleIndex, currentDoor);
    updateNextStepBasedOnStyle(selectedStyleIndex);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableDoorStyles.map((doorStyle, index) => (
          <SelectCard
            key={index}
            image={doorStyle[1]}
            text={doorStyle[0]}
            isSelected={selectedStyleIndex === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectDoorStyle;
