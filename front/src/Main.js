import React from 'react';
import XChoosing from './xChoosing';
import YChoosing from './yChoosing';
import RChoosing from './rChoosing';
import Graphic from './Graphic';

function Main() {

    var isUserHere = 
    fetch('http://localhost:8080/api/check', {
        method: 'GET',
        credentials: 'include',
    })
        .then(response => response.json())
        .then((data) => { console.log(data.isUserHere)
            return data.isUserHere });

    const handleClick = () => {
        // You can add your custom logic here when the button is clicked
        alert('Button clicked!');
    };

    console.log("isUserHere: " + isUserHere);
    console.log("x: " + xValue + " y: " + yValue + " r: " + rValue);

    if (isUserHere) {
        return (
            <div>
                <Graphic />
                <XChoosing />
                <YChoosing />
                <RChoosing />
            </div>
        );
    }
}

export default Main;

