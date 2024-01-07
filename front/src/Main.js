import React, { useState } from 'react';
import XChoosing from './xChoosing';
import YChoosing from './yChoosing';
import RChoosing from './rChoosing';
import Graphic from './Graphic';
import Table from './Table';

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
            })

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

    };

    //console.log("isUserHere: " + isUserHere);

    let xValue = 0;
    let yValue = 0;
    const [rValue, setRValue] = useState('');

    const setX = (xdata) => {
        console.log("x: " + xdata);
        xValue = xdata;
    }
    const setY = (ydata) => {
        console.log("y: " + ydata);
        yValue = ydata;
    }
    const setR = (rdata) => {
        console.log("r: " + rdata);
        setRValue(rdata);
    }

    const [tableValue, setTable] = useState([]);

    if (isUserHere) {
        return (
            <div>
                <div>
                    <Graphic radius={rValue} setToMainX={setX} setToMainY={setY} />
                    <br />
                    x:
                    <br />
                    <XChoosing setToMain={setX} />
                    <br />
                    y:
                    <br />
                    <YChoosing setToMain={setY} />
                    r:
                    <br />
                    <RChoosing setToMain={setR} />
                </div>
                <div>
                    <input type="submit" onClick={handleSubmit} />
                </div>
                <div>
                    <Table JsonData={tableValue} />
                </div>
            </div>
        );
    }
}

export default Main;

