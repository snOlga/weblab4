import React from 'react';
import IconButton from '@mui/material/IconButton';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

function rChoosing() {

    const handleClick = () => {
        // You can add your custom logic here when the button is clicked
        console.log('Button clicked!');
    };

    return (
        <div>
            <IconButton color="primary" onClick={() => onclick(1)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
        </div>
    );
}
export default rChoosing;
