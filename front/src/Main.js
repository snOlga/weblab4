import React from 'react';
import XChoosing from './xChoosing';
import YChoosing from './yChoosing';
import RChoosing from './rChoosing';
import Graphic from './Graphic';

function Main() {

    let isUserHere = false;

    fetch('http://localhost:8080/api/check', {
        method: 'GET',
        credentials: 'include',
    })
        .then(response => {
            console.log(response);
            response.json();
        })

    const handleClick = () => {
        // You can add your custom logic here when the button is clicked
        alert('Button clicked!');
    };

    if (true) {
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
