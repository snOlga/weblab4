import React from 'react';
import IconButton from '@mui/material/IconButton';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

function yChoosing() {

    const handleClick = () => {
        // You can add your custom logic here when the button is clicked
        alert('Button clicked!');
      };

    return (
        <div>
            <IconButton color="primary" onClick={handleClick}>
                <GpsFixedOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default yChoosing;
