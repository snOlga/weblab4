import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import './Main.css';

function YChoosing({ setToMain }) {

    function handleChangeValue(value) {
        setToMain(value);
    }

    return (
        <div className='chooseButtons'>
            <div className='chooseButton'>
                -3
                <IconButton color="black" onClick={() => handleChangeValue(-3)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                -2
                <IconButton color="black" onClick={() => handleChangeValue(-2)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                -1
                <IconButton color="black" onClick={() => handleChangeValue(-1)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                0
                <IconButton color="black" onClick={() => handleChangeValue(0)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                1
                <IconButton color="black" onClick={() => handleChangeValue(1)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                2
                <IconButton color="black" onClick={() => handleChangeValue(2)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                3
                <IconButton color="black" onClick={() => handleChangeValue(3)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButton'>
                4
                <IconButton color="black" onClick={() => handleChangeValue(4)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
            <div className='chooseButtonRight'>
                5
                <IconButton color="black" onClick={() => handleChangeValue(5)}>
                    <GpsFixedOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default YChoosing;
