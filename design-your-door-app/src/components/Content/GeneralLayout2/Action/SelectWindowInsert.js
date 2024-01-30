import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableWindowInserts = [
  ['No Window Insert', 'assets/design/inserts/cascade-short.jpg', null],
  ['Cascade Short', 'assets/design/inserts/cascade-short.jpg', 'cascade-short'],
  ['Cascade Long', 'assets/design/inserts/cascade-long.jpg', 'cascade-long'],
  ['Stockton Short', 'assets/design/inserts/stockton-short.jpg', 'stockton-short'],
  ['Stockton Long', 'assets/design/inserts/stockton-long.jpg', 'stockton-long'],
  ['Sunburst Short', 'assets/design/inserts/sunburst-short.jpg', 'sunburst-short'],
  ['Sunburst Long', 'assets/design/inserts/sunburst-long.jpg', 'sunburst-long'],
  ['Waterton Short', 'assets/design/inserts/waterton-short.jpg', 'waterton-short'],
  ['Waterton Long', 'assets/design/inserts/waterton-long.jpg', 'waterton-long'],
  ['Victorian Short', 'assets/design/inserts/victorian-short.jpg', 'victorian-short'],
  ['Victorian Long', 'assets/design/inserts/victorian-long.jpg', 'victorian-long'],
  ['Arched Madison', 'assets/design/inserts/arched-madison.jpg', 'arched-madison'],
  ['Arched Stockton', 'assets/design/inserts/arched-stockton.jpg', 'arched-stockton'],
  ['Sherwood', 'assets/design/inserts/sherwood.jpg', 'sherwood'],
];



function SelectWindowInsert({ setWindowInsert, getWindowInsert, currentDoor, setNextStep }) {
  
  const [selectedWindowInsert, setSelectedWindowInsert] = useState(0);
  const [selectedPosition, setSelectedPosition] = useState(1);

  useEffect(() => {
    const currentWindowInsert = getWindowInsert(currentDoor);

    if(currentWindowInsert.style){
      const indexOfWindowInsert = availableWindowInserts.findIndex(style => style[2] === currentWindowInsert.style);
      
      setSelectedWindowInsert(indexOfWindowInsert);
      setSelectedPosition(currentWindowInsert.position)
      
      setNextStep("3-window-insert-colour");
    }else{
      setNextStep("4-summary");
    }
  }, [selectedWindowInsert, selectedPosition]);

  const handleSelectInsert = (index) => {
    if(index > 0){
      setWindowInsert(availableWindowInserts[index][2],selectedPosition, currentDoor);
    }else{
      setWindowInsert(null, null, currentDoor);
    }
    setSelectedWindowInsert(index);
  };

  const handleSelectPosition = (event) => {
    const windowInsertPosition = event.target.value;
    setSelectedPosition(windowInsertPosition);
    setWindowInsert(availableWindowInserts[selectedWindowInsert][2],windowInsertPosition, currentDoor);
  };

  return (
    <Box>
      <Text fontSize="sm" mb={2}>Window Inser Position</Text>
      <Select name="position" size="sm" placeholder='Select option' onChange={handleSelectPosition} value={selectedPosition}>
        <option value={1}>Row 1</option>
        <option value={2}>Row 2</option>
      </Select>

      <Text fontSize="sm" mt={3} mb={2}>Window Inser Style</Text>
      <SimpleGrid columns={1} spacing={3}>
        {availableWindowInserts.map((windowInsert, index) => (
          <SelectCard
            key={index}
            image={windowInsert[1]}
            text={windowInsert[0]}
            isSelected={selectedWindowInsert === index}
            onClick={() => handleSelectInsert(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SelectWindowInsert;
