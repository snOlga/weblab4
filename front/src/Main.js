import React, { useState } from 'react';
import XChoosing from './xChoosing';
import YChoosing from './yChoosing';
import RChoosing from './rChoosing';
import Graphic from './Graphic';
import Table from './Table';
import UserLabel from './UserLabel.js';
import { Navigate } from 'react-router-dom';
import './Main.css';

function Main() {

    var isUserHere =
        fetch('http://localhost:8080/api/check_user', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data.isUserHere)
                return data.isUserHere
            });

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/get_one_hit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                x: xValue,
                y: yValue,
                r: rValue
            }),
        })
            .then(response => {
                console.log("only one response: ");
                console.log(response.json());


                fetch("http://localhost:8080/api/get_all_hits", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        let jsonResp = response.json();
                        console.log(jsonResp);
                        jsonResp.then((data) => setTable(data));
                    })
            })

    };

    let [xValue, setXValue] = useState('');
    let [yValue, setYValue] = useState('');
    const [rValue, setRValue] = useState('');

    const setX = (xdata) => {
        console.log("x: " + xdata);
        setXValue(xdata);
    }
    const setY = (ydata) => {
        console.log("y: " + ydata);
        setYValue(ydata);
    }
    const setR = (rdata) => {
        console.log("r: " + rdata);
        setRValue(rdata);
    }

    const [tableValue, setTable] = useState([]);

    if (isUserHere) {
        return (
            <div className='header'>
                Safonova Olga P3207
                <div className='container'>
                    <UserLabel />
                    <div className="graphicContainer"> 
                        <div>
                            <Graphic radius={rValue} setToMainX={setX} setToMainY={setY} JsonData={tableValue} />
                        </div>
                        <div className='buttons'>
                            r
                            <br />
                            <RChoosing setToMain={setR} />
                            <br />
                            x
                            <br />
                            <XChoosing setToMain={setX} />
                            <br />
                            y
                            <br />
                            <YChoosing setToMain={setY} />
                            <br />
                            <button onClick={handleSubmit} className='button'>check?</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Table JsonData={tableValue} />
                </div>
            </div>
        );
    }
}

export default Main;

