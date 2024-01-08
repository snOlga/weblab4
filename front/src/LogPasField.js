import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import './LogPasStyle.css';
import LoremIpsum from './LoremIpsum';

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
                //console.log(response);
                response.json();
            })
            .then(data => {
                //console.log(data);
            })

        window.location.reload(false);

    };

    if (Cookies.get("IDkey") != undefined) {
        return <Navigate to='/main' />
    }

    return (
        <div className='signin'>
            Sign In
            <form onSubmit={handleSubmit} className='logPasForm'>
                <div>
                    <br />
                    <input
                        type="text"
                        placeholder="login"
                        value={login}
                        onChange={handleChangeLogin}
                        className='input'
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handleChangePass}
                        className='input'
                    />
                    <br />
                    <div className='text'>
                        new here?
                        <input
                            type="checkbox"
                            checked={isNew}
                            onChange={handleChangeNew}
                            className='checkbox'
                        />
                    </div>
                    <button type="submit" className='button' id='submitButton'>sign in</button>
                </div>

                <LoremIpsum />
            </form>
        </div>
    );
}

export default LogPass;
