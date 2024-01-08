import React, { useState } from 'react';
import './Main.css';

function XChoosing({ setToMain }) {
    const [xValue, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
        setToMain(xValue);
    };

    function substr() {
        document.getElementById('xInput').value = this.value.substr(0,17);
    }

    return (
        <input type='number' onChange={handleChangeValue} className='input' onInput={substr} id='xInput'/>
    );
}

export default XChoosing;
