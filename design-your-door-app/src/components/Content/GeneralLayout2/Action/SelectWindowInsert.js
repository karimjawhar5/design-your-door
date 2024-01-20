import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text } from '@chakra-ui/react';
import SelectCard from '../Helpers/SelectCard';

const availableWindowInserts = [
  ['No Window Insert', 'assets/design/inserts/cascade-short.jpg', null],
  ['cascade short', 'assets/design/inserts/cascade-short.jpg', 'cascade-short'],
  ['cascade long', 'assets/design/inserts/cascade-long.jpg', 'cascade-long'],
  ['stockton short', 'assets/design/inserts/stockton-short.jpg', 'stockton-short'],
  ['stockton long', 'assets/design/inserts/stockton-long.jpg', 'stockton-long'],
  ['sunburst short', 'assets/design/inserts/sunburst-short.jpg', 'sunburst-short'],
  ['sunburst long', 'assets/design/inserts/sunburst-long.jpg', 'sunburst-long'],
  ['waterton short', 'assets/design/inserts/waterton-short.jpg', 'waterton-short'],
  ['waterton long', 'assets/design/inserts/waterton-long.jpg', 'waterton-long'],
  ['victorian short', 'assets/design/inserts/victorian-short.jpg', 'victorian-short'],
  ['victorian long', 'assets/design/inserts/victorian-long.jpg', 'victorian-long'],
  ['arched madison', 'assets/design/inserts/arched-madison.jpg', 'arched-madison'],
  ['arched stockton', 'assets/design/inserts/arched-stockton.jpg', 'arched-stockton'],
  ['sherwood', 'assets/design/inserts/sherwood.jpg', 'sherwood'],
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
    }
  }, []);

  const handleSelectInsert = (index) => {
    if(index > 0){
      setWindowInsert(availableWindowInserts[index][2],selectedPosition, currentDoor);
      setNextStep("3-window-insert-colour");
    }else{
      setWindowInsert(null, null, currentDoor);
      setNextStep("4-summary");
    }
    setSelectedWindowInsert(index);
  };

  const handleSelectPosition = (event) => {
    setSelectedPosition(event.target.value);
    setWindowInsert(availableWindowInserts[selectedWindowInsert][2],event.target.value, currentDoor);
    console.log(getWindowInsert(currentDoor))
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
