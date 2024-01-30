import React, { useCallback, useState, useEffect } from 'react';
import { Box, Grid, GridItem, Text, Center } from '@chakra-ui/react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDropzone } from 'react-dropzone';

const defaultMockups = [
  {path:'/assets/house-images/mockup1.jpg', sizes:[[[8,0],[7,0]],[[16,],[7,0]]], positions:[[[0,0],[100,0],[0,100],[100,100]],[[200,200],[300,200],[200,300],[300,300]]]},
  {path:'/assets/house-images/mockup1.jpg', sizes:[[[8,0],[7,0]]], positions:[[[0,0],[100,0],[0,100],[100,100]]]}
];

const ImageSelect = ({setMockupImage, setDoorPosition, addDoorDesign, clearDoorDesigns, setNextStep}) => {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSelect = (index) => {
      setSelectedIndex(index+1);
      setMockupImage(defaultMockups[index].path);
      for (let i = 0; i < defaultMockups[index].positions.length; i++) {
        addDoorDesign(defaultMockups[index].sizes[i][0],defaultMockups[index].sizes[i][1]);
        setDoorPosition(defaultMockups[index].positions[i], i);
        setUploadedImage(null);
        setNextStep("3-design-door");
      }
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const userImage = acceptedFiles[0];
      try {
        setSelectedIndex(0);
        const imageUrl = URL.createObjectURL(userImage);
        setUploadedImage(imageUrl);
        setMockupImage(imageUrl);
        clearDoorDesigns();
        setNextStep("2-add-doors");
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1, // Set maximum allowed files to 1
    multiple: false, // Disable multiple file selection
  });

  return (
    <Box flex='1' px='20' overflowY='auto'>

      <Grid templateColumns="repeat(4, 2fr)" gap={4} py={4}>

        <GridItem key={0} colSpan={1}>
          <Box {...getRootProps()} pos="relative" className="dropzone" h="250px" bgImage={`url(${uploadedImage})`} bgSize="cover" bgPosition="center center" border={selectedIndex==0 ? '4px' : '1px'} borderColor={selectedIndex==0 ? 'orange.500' : 'gray.300'} color={selectedIndex==0 ? 'gray.800' : 'gray.600'}>
            <input {...getInputProps()} />
            {
              uploadedImage ? (
                <Center flexDirection='column' zIndex={1}>
                  {<IoCloudUploadOutline size={80} /> && (selectedIndex==0)}
                  <Text size='sm' as='b'>Click To Replace Image</Text>
                  <Text size='sm' as='u' color='orange.500' >Browse Images</Text>
              </Center>
              ) :
              (
                <Center flexDirection='column' zIndex={1}>
                  <IoCloudUploadOutline size={80} />
                  <Text size='sm' >Click To Replace Image</Text>
                  <Text size='sm' as='u' color='orange.500'>Browse Images</Text>
              </Center>
              )
            }
          </Box>
        </GridItem>
        {
          defaultMockups.map((defaultMockup, index)=>(
            <GridItem key={index+1} colSpan={1}>
              <Box onClick={() => handleSelect(index)} className='defaultMockupBoxes' h="250px" border={selectedIndex==index+1 ? '4px' : '1px'} borderColor={selectedIndex==index+1 ? 'orange.500' : 'gray.300'} bgImage={`url(${defaultMockup.path})`} bgSize="cover" bgPosition="center center"></Box>
            </GridItem>
          ))
        } 
      </Grid>
    </Box>
  );
};

export default ImageSelect;
