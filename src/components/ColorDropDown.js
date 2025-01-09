import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ColorDropDown(props) {
    let selectedColorsValue = "blue";

    selectedColorsValue = props.color;


    //Update the selection of the dropdown.
    // This will update the product list from the product page/
    const handleSelect = (selectedColor) => {
        console.log(selectedColor);

        let colorSelection = selectedColor;
            console.log(`colorSelection : ${colorSelection}`);
            selectedColorsValue = colorSelection;
            props.updateColor(colorSelection);

    }

    return (
        <div>
            {/*Drop down list of colours that can be selected */}
            <Dropdown
            onSelect={handleSelect}
            >
                {/*Update the colour of the dropdown box by the selection of the user*/}
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                 style={{ backgroundColor: selectedColorsValue }}>
                    Choose color
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className={"dropdown-item"} eventKey={"blue"} value="blue" >Blue</Dropdown.Item>
                    <Dropdown.Item className={"dropdown-item"} eventKey={"red"} value="red" >Red</Dropdown.Item>
                    <Dropdown.Item className={"dropdown-item"} eventKey={"green"} value="green" >Green</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default ColorDropDown;