import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableGlassTypes = [
  ['clear', '/assets/design/glass/clear.jpg'],
  ['tinted', '/assets/design/glass/tinted.jpg'],
  ['frosted', '/assets/design/glass/frosted.jpg'],
];

function SelectGlassType({ handleFinish, setGlassType, getGlassType, currentDoor }) {
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const glassType = getGlassType(currentDoor);

    if (glassType) {
      const indexOfType = availableGlassTypes.findIndex(glass => glass[0] === glassType);
      setSelectedType(indexOfType);
      handleFinish();
    }
  }, [selectedType]);

  const handleSelect = (index) => {
    setSelectedType(index);
    setGlassType(availableGlassTypes[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={2} spacing={3}>
        {availableGlassTypes.map((glassType, index) => (
          <SelectCard
            key={index}
            image={glassType[1]}
            text={glassType[0]}
            isSelected={selectedType === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectGlassType;
