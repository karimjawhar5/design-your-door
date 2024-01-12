import React, { useCallback, useState } from 'react';
import { Box, Grid, GridItem, Text, Center } from '@chakra-ui/react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDropzone } from 'react-dropzone';

const ImageSelect = ({setMockupImage, mockupImage, getDoorPosition, setDoorPosition, setCurrentStepComplete}) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  
  const defaultMockups = [
    {path:'/assets/house-images/mockup1.jpg', doors:2, positions:[[[0,0],[100,0],[0,100],[100,100]],[[200,200],[300,200],[200,300],[300,300]]]},
    {path:'/assets/house-images/mockup1.jpg', doors:1, positions:[[[0,0],[100,0],[0,100],[100,100]]]},
    {path:'/assets/house-images/mockup1.jpg', doors:2, positions:[[[0,0],[100,0],[0,100],[100,100]],[[200,200],[300,200],[200,300],[300,300]]]},
  ];

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box flex='1' px='20' overflowY='auto'>
      
      <Box textAlign="center" pt={8}>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the images here...</p>
          ) : (
            <Center flexDirection='column' >
            <IoCloudUploadOutline size={80} />
            <Text size='sm'>Drag 'n' Drop you image here</Text>
            </Center>
          )}
        </div>
      </Box>

      <Grid templateColumns="repeat(4, 2fr)" gap={4} py={4}>
        {
          defaultMockups.map((defaultMockup, index)=>(
            <GridItem key={index} colSpan={1}>
              <Box className='defaultMockupBoxes' h="250px" border='1px' borderColor='gray.300' bgImage={`url(${defaultMockup.path})`} bgSize="cover" bgPosition="center center"></Box>
            </GridItem>
          ))
        } 
      </Grid>
    </Box>
  );
};

const dropzoneStyle = {
  border: '2px dashed #3498db', // Change border color to a nice blue
  borderRadius: '8px', // Increase border radius for a smoother look
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
  cursor: 'pointer',
  backgroundColor: '#f8f8f8', // Add a light background color
  color: '#555', // Set text color to a dark gray
  outline: 'none', // Remove default outline on click
  transition: 'border 0.3s ease-in-out', // Add a smooth transition to the border
  fontFamily: 'Arial, sans-serif', // Use a common font for consistency
};

// Add hover effect for a more interactive feel
dropzoneStyle[':hover'] = {
  border: '2px dashed #2980b9', // Change border color on hover
};

// Add focus effect to match the hover effect
dropzoneStyle[':focus'] = {
  border: '2px dashed #2980b9', // Change border color on focus
};

export default ImageSelect;
