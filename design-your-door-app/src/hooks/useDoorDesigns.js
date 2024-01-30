import { useState } from "react";
function useDoorDesigns() {
    const [doorDesigns, setDoorDesigns] = useState([
        {
            position: [[200,200], [500,200], [200,500], [500,500]],
            dimensions: { length: 8, height: 8 },
            grid: [8, 8],
            doorStyle: null,
            doorType: null,
            doorColour: null,
            windowInsert: { style: null, colour: null, position: null},
            windowLayout: null,
            glass: null
        }
    ]);

    //Fix this ASAP
    function sizeFunction (length, height) {
        let x = (length[0]*12)+length[1];
        let y = (height[0]*12)+height[1];

        let cols = 0;
        let rows = 0;
        
        if (x % 48 < x % 60){
            let n = 0;
            while (x - n >= 48){
                n += 48;
                cols++;
            }
        } else {
            let n = 0;
            while (x - n >= 60){
                n += 60;
                cols++;
            }
        }

        if (y % 18 < y % 21){
            let n = 0;
            while (y - n >= 18){
                n += 18;
                rows++;
            }
        } else {
            let n = 0;
            while (y - n >= 21){
                n += 21;
                rows++;
            }
        }
        return [cols, rows];
    }

    const addDoorDesign = (length, height) => {
        const cols = sizeFunction(length, height)[0];
        const rows = sizeFunction(length, height)[1];
        const newDoorDesign = {
            position: [[200,200], [500,200], [200,500], [500,500]],
            dimensions: { length: length, height: height },
            grid: [cols, rows],
            doorStyle: null,
            doorType: null,
            doorColour: null,
            windowInsert: { style: null, colour: null, position: null},
            windowLayout: null,
            glass: null
        };

        setDoorDesigns([...doorDesigns, newDoorDesign]);
    };

    const removeDoorDesign = (index) => {
        setDoorDesigns((prevDoorDesigns) =>
            prevDoorDesigns.filter((_, i) => i !== index)
        );
    };

    const clearDoorDesigns = () => {
        setDoorDesigns([]);
    };
    const getIncompleteDoorDesign = () => {
        var incompleteDoorDesign = null;
        for (let i = 0; i < doorDesigns.length; i++){
            if (doorDesigns[i].doorColour === null){
                incompleteDoorDesign = i
            }
        }
        return incompleteDoorDesign;
    };

    const availableDoorStyles = ['raised', 'carriage', 'flush'];
    const availableDoorTypes = ['short', 'long'];
    const availableColours = ['white', 'black', 'brown', 'charcoal', 'almond', 'sandstone', 'dark-brown'];
    const availableWindowInsertStyles = ['cascade-short','cascade-long', 'stockton-short', 'stockton-long', 'sunburst-short','sunburst-long' , 'waterton-short', 'waterton-long', 'victorian-short','victorian-long', 'arched-madison', 'arched-stockton', 'sherwood']
    
    // Getters
    const getPosition = (index) => {
        return doorDesigns[index].position;
    }

    const getDimensions = (index) => {
        return doorDesigns[index].dimensions;
    }

    const getGrid = (index) => {
        return doorDesigns[index].grid;
    }

    const getDoorStyle = (index) => {
        return doorDesigns[index].doorStyle;
    }

    const getDoorType = (index) => {
        return doorDesigns[index].doorType;
    }

    const getDoorColour = (index) => {
        return doorDesigns[index].doorColour;
    }

    const getWindowInsert = (index) => {
        return doorDesigns[index].windowInsert;
    }
    const getWindowInsertColour = (index) => {
        return doorDesigns[index].windowInsert.colour;
    }
    const getWindowLayout = (index) => {
        return doorDesigns[index].windowLayout;
    }

    const getGlass = (index) => {
        return doorDesigns[index].glass;
    }

    // Setters
    const setDoorSize = (length, height, index) => {
        const cols = sizeFunction(length, height)[0];
        const rows = sizeFunction(length, height)[1];
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            dimensions: { length, height },
            grid: [cols, rows]
        };
        return newDesigns;
        });
    };
    const setDoorPosition = (newDoorPosition, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            position: newDoorPosition
        };
        return newDesigns;
        });
    };
    const setDoorStyle = (newDoorStyle, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            doorStyle: newDoorStyle
        };
        return newDesigns;
        });
    };
    const setDoorType = (newDoorType, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            doorType: newDoorType
        };
        return newDesigns;
        });
    };
    const setDoorColour = (newDoorColour, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            doorColour: newDoorColour
        };
        return newDesigns;
        });
    };
    const setWindowInsert = (newWindowInsertStyle, newWindowInsertPosition, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            windowInsert: {
            style: newWindowInsertStyle, 
            colour: newDesigns[index].doorColour,
            position: newWindowInsertPosition
            }
        };
        return newDesigns;
        });
    };
    const setWindowInsertColour = (newWindowInsertColour, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            windowInsert: {
                ...newDesigns[index].windowInsert,
                colour: newWindowInsertColour
            }
        };
        return newDesigns;
        });
    };
    const setWindowLayout = (newWindowLayout, index) => {
        setDoorDesigns((prevDesigns) => {
        const newDesigns = [...prevDesigns];
        newDesigns[index] = {
            ...newDesigns[index],
            windowLayout: newWindowLayout
        };
        return newDesigns;
        });
    };
    const setGlass = (newGlass, index) => {
    setDoorDesigns((prevDesigns) => {
    const newDesigns = [...prevDesigns];
    newDesigns[index] = {
        ...newDesigns[index],
        glass: newGlass
    };
    return newDesigns;
    });
    };

    return {
        addDoorDesign,
        removeDoorDesign,
        clearDoorDesigns,
        doorDesigns,
        getPosition,
        getDimensions,
        getGrid,
        getDoorStyle,
        getDoorType,
        getDoorColour,
        getWindowInsert,
        getWindowInsertColour,
        getWindowLayout,
        getGlass,
        setDoorSize,
        setDoorPosition,
        setDoorStyle,
        setDoorType,
        setDoorColour,
        setWindowInsert,
        setWindowInsertColour,
        setWindowLayout,
        setGlass,
        availableDoorStyles,
        availableDoorTypes,
        availableColours,
        availableWindowInsertStyles,
        getIncompleteDoorDesign
    }
}

export default useDoorDesigns




