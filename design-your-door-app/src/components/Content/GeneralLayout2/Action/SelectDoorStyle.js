import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableDoorStyles = [
  ['raised', '/assets/design/styles/raised.jpg'],
  ['carriage', '/assets/design/styles/carriage.jpg'], // Corrected image paths
  ['flush', '/assets/design/styles/flush.jpg'], // Corrected image paths
];

function SelectDoorStyle({ setDoorStyle, currentDoor, setNextStep, getDoorStyle }) {
  const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    const doorStyle = getDoorStyle(currentDoor);
    if (doorStyle) {
      const indexOfStyle = availableDoorStyles.findIndex(style => style[0] === doorStyle);
      setSelectedStyle(indexOfStyle);
      if(doorStyle !== 'flush'){
        setNextStep("3-door-type");
      }else{
        setNextStep("3-door-colour");
      }
      
    } else {
      setNextStep(null);
    }
  }, [currentDoor, getDoorStyle, setNextStep]);

  const handleSelect = (index) => {
    setSelectedStyle(index);
    setDoorStyle(availableDoorStyles[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableDoorStyles.map((doorStyle, index) => (
          <SelectCard
            key={index}
            image={doorStyle[1]}
            text={doorStyle[0]}
            isSelected={selectedStyle === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectDoorStyle;
