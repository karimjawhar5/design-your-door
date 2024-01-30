import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableWindowLayouts = [
  ['right', 'assets/design/layouts/right.jpg'],
  ['left', 'assets/design/layouts/left.jpg'],
];


function SelectWindowLayout({ setWindowLayout, getWindowLayout, currentDoor, setNextStep }) {
  const [selectedWindowLayout, setSelectedWindowLayout] = useState(null);

  useEffect(() => {
    const windowLayout = getWindowLayout(currentDoor);
    if (windowLayout) {
      const indexOfWindowLayout = availableWindowLayouts.findIndex(style => style[0] === windowLayout);
      setSelectedWindowLayout(indexOfWindowLayout);
      setNextStep("3-glass");
    }
  }, [selectedWindowLayout]);

  const handleSelect = (index) => {
    setSelectedWindowLayout(index);
    setWindowLayout(availableWindowLayouts[index][0], currentDoor);
  };

  return (
    <Box>
      <SimpleGrid columns={1} spacing={3}>
        {availableWindowLayouts.map((windowLayout, index) => (
          <SelectCard
            key={index}
            image={windowLayout[1]}
            text={windowLayout[0]}
            isSelected={selectedWindowLayout === index}
            onClick={() => handleSelect(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectWindowLayout;
