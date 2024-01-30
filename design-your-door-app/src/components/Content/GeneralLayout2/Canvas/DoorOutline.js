import { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Line } from 'react-konva';

function DoorOutline({ mockupImage, doorDesigns, currentDoor }) {
  const [image] = useState(new window.Image());
  const [imageSize, setImage] = useState([0,0]);

  useEffect(() => {
    image.src = mockupImage;
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setImage([width, height])
      console.log(`Image width: ${width}, height: ${height}`);
    };

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

        {
          doorDesigns.map((door, doorIndex) => (
            <Line
                key={doorIndex}
                points={[
                  door.position[0][0], door.position[0][1],
                  door.position[1][0], door.position[1][1],
                  door.position[3][0], door.position[3][1],
                  door.position[2][0], door.position[2][1],
                ]}
                closed={true}
                fill={currentDoor == doorIndex? 'orange': 'white'}
                opacity={1}
              />
          ))
        }
      </Layer>
    </Stage>
  );
}

export default DoorOutline;
