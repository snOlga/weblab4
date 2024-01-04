import React, { useState } from 'react';

function XChoosing({ setToMain }) {
    const [xValue, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
        setToMain(xValue);
    };

    return (
        <input type='text' onChange={handleChangeValue} />
    );
}

export default XChoosing;
