import React from 'react';

function Graphic({ radius, setToMainX, setToMainY, JsonData }) {

    const getCoordinates = (event) => {
        let x = (event.nativeEvent.offsetX - 150) / 100 * 5;
        let y = -(event.nativeEvent.offsetY - 150) / 100 * 5;

        console.log(radius);
        console.log("graphic: x: " + x + " y: " + y);
        setToMainX(x);
        setToMainY(y);
    }

    let trianglePoints = "150," + (20 * radius + 150) + " 150,150 " + (-10 * radius + 150) + ",150";
    let squarePoints = "150," + (-20 * radius + 150) +
        " 150,150 " + (20 * radius + 150) + ",150 " + (20 * radius + 150) + "," +
        (-20 * radius + 150);
    let roundPoints = "M " + (-20 * radius + 150) + " 150 C " +
        (-20 * radius + 150) + " " + (-20 * radius + 150) +
        ", 150 " + (-20 * radius + 150) + ", 150 " + (-20 * radius + 150) +
        " L 150 150 Z";


    const DrawPoints = JsonData.map(
        (hit) => {
            console.log(hit);
            let x = (hit.x) / 5 * 100 + 150;
            let y = -(hit.y) / 5 * 100 + 150;
            return (
                <circle cx={x} cy={y} r='3' />
            )
        }
    )

    return (
        <div>
            <svg id="graphic" height="300" width="300" xmlns="http://www.w3.org/2000/svg" onClick={getCoordinates}>

                <polygon id="triangle" fill="#6e79d6" points={trianglePoints}></polygon>
                <polygon id="square" fill="#6e79d6" points={squarePoints}></polygon>
                <path id="round" fill="#6e79d6" d={roundPoints}></path>

                <line stroke="#272829" x1="0" x2="300" y1="150" y2="150"></line>
                <line stroke="#272829" x1="150" x2="150" y1="0" y2="300"></line>
                <polygon fill="#272829" stroke="#272829" points="150,0 144,15 156,15"></polygon>
                <polygon fill="#272829" stroke="#272829" points="300,150 285,156 285,144"></polygon>

                <line stroke="#272829" x1="200" x2="200" y1="155" y2="145"></line>
                <line stroke="#272829" x1="250" x2="250" y1="155" y2="145"></line>
                <line stroke="#272829" x1="50" x2="50" y1="155" y2="145"></line>
                <line stroke="#272829" x1="100" x2="100" y1="155" y2="145"></line>
                <line stroke="#272829" x1="145" x2="155" y1="100" y2="100"></line>
                <line stroke="#272829" x1="145" x2="155" y1="50" y2="50"></line>
                <line stroke="#272829" x1="145" x2="155" y1="200" y2="200"></line>
                <line stroke="#272829" x1="145" x2="155" y1="250" y2="250"></line>

                {DrawPoints}
            </svg>
        </div>
    );
}

export default Graphic;
