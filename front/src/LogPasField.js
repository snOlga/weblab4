import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

function LogPass() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isNew, setIsNew] = useState(false);
    const navigate = useNavigate();

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };
    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeNew = (e) => {
        setIsNew(!isNew);
        console.log(isNew);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/user_processing', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                password: password,
                isNew: isNew
            }),
        })
            .then(response => {
                console.log(response);
                response.json();
            })
            .then(data => { console.log(data); })

    };

    console.log(Cookies.get("IDkey"));

    if (Cookies.get("IDkey") != undefined) {
        console.log(Cookies.get("IDkey"));
        return <Navigate to='/main' />
    }

    return (
        <form onSubmit={handleSubmit}>
            is new here?
            <input
                type="checkbox"
                checked={isNew}
                onChange={handleChangeNew}
            />
            <input
                type="text"
                placeholder="login here"
                value={login}
                onChange={handleChangeLogin}
            />
            <input
                type="text"
                placeholder="password here"
                value={password}
                onChange={handleChangePass}
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default LogPass;
