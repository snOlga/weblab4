import React from 'react';

function Graphic() {

    const handleClick = () => {
        // You can add your custom logic here when the button is clicked
        alert('Button clicked!');
      };

    return (
        <div>
                <svg id="graphic" height="300" width="300" xmlns="http://www.w3.org/2000/svg">
                    
                    <polygon id="triangle" className="figure" points="150,250 150,150 100,150"></polygon>
                    <polygon id="square" className="figure" points="150,50 150,150 250,150 250,50"></polygon>
                    <path id="round" className="figure" d="M 50 150 C 50 50, 150 50, 150 50 L 150 150 Z"></path>

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

                    <text className="fives" fill="#272829" x="250" y="170">5</text>
                    <text className="fives" fill="#272829" x="40" y="170">-5</text>
                    <text className="fives" fill="#272829" x="130" y="55">5</text>
                    <text className="fives" fill="#272829" x="130" y="255">-5</text>
                </svg>
            </div>
    );
}

export default Graphic;
