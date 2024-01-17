import { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Image, Line, Circle } from 'react-konva';

function DoorPositioner({ mockupImage, getDoorPosition, setDoorPosition, doorDesigns }) {
  const [image] = useState(new window.Image());
  const [imageSize, setImage] = useState([0,0]);

  const handleCornerDrag = (doorIndex, cornerIndex, { target }) => {
    const newCorners = doorDesigns[doorIndex].position;
    newCorners[cornerIndex] = [target.x(), target.y()];
    setDoorPosition(doorIndex, newCorners);
  };

  useEffect(() => {
    // Set the image source
    image.src = mockupImage;

    // Event listener for image load
    image.onload = () => {
      // Get image width and height
      const width = image.width;
      const height = image.height;

      setImage([width, height])

      // Now you can use the width and height as needed
      console.log(`Image width: ${width}, height: ${height}`);
    };

    // Event listener for image error (optional)
    image.onerror = (error) => {
      console.error(`Error loading image: ${error.message}`);
    };
  }, [mockupImage]);

  return (
    <Stage width={1040} height={600}>
      <Layer>
        {/* Background Rectangle */}
        <Rect
          width={1040}
          height={600}
          fillPatternImage={image}
          fillPatternScale={(imageSize[0]/imageSize[1]) > 1.73 ? { x:600/imageSize[1], y:600/imageSize[1] }: { x: 1040/imageSize[0], y: 1040/imageSize[0] }}
          fillPatternOffset={(imageSize[0]/imageSize[1]) > 1.73 ? { x:((imageSize[0]-(1040/(600/imageSize[1])))/2), y:0}: { x:0, y:((imageSize[1]-(600/(1040/imageSize[0])))/2)}}
          fillPatternRepeat='no-repeat'
        />
        {/* Add your shapes or other components here */}

        {
          doorDesigns.map((door, doorIndex) => (
            <>
            <Line
                points={[
                  door.position[0][0], door.position[0][1],
                  door.position[1][0], door.position[1][1],
                  door.position[3][0], door.position[3][1],
                  door.position[2][0], door.position[2][1],
                ]}
                closed={true}
                fill='red'
                opacity={0.5}
              />
            {
              door.position.map((corner, cornerIndex) => (
                <Circle
                  key={cornerIndex}
                  x={corner[0]}
                  y={corner[1]}
                  radius={13}
                  stroke='white'
                  draggable
                  onDragMove={(e) => handleCornerDrag(doorIndex, cornerIndex, e)}
                />
              ))
            }
          </>
          ))
        }
      </Layer>
    </Stage>
  );
}

export default DoorPositioner;
