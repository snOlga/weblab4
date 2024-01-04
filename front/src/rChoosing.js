import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

function RChoosing({ setToMain }) {

    function handleChangeValue(value) {
        setToMain(value);
    }

    return (
        <div>
            1
            <IconButton color="primary" onClick={() => handleChangeValue(1)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
            2
            <IconButton color="primary" onClick={() => handleChangeValue(2)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
            3
            <IconButton color="primary" onClick={() => handleChangeValue(3)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
            4
            <IconButton color="primary" onClick={() => handleChangeValue(4)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
            5
            <IconButton color="primary" onClick={() => handleChangeValue(5)}>
                <GpsFixedOutlinedIcon />
            </IconButton>
        </div>
    );
}

export default RChoosing;
