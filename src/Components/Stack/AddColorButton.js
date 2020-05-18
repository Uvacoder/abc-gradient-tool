import React from 'react';
import '../../Styles/Stack/AddColorButton.css';
import { IoIosAdd } from 'react-icons/io';
import { INPUT_TEXT_GRAY } from '../../Utils/hexConstants';

function AddColorButton(props) {
    const { clickFunction } = props;
    return (
        <div className='add-color-container'>
            <div className='add-color-button' onClick={clickFunction}>
                <IoIosAdd size='35px' color={INPUT_TEXT_GRAY} />
                <p>Add Color</p>
            </div>
        </div>
    );
}

export default AddColorButton;
