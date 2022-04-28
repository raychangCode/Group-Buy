import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    console.log(credentials)
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

async function regUser(credentials) {
    console.log(credentials)
    document.getElementById('register').style.visibility = 'hidden';
    return fetch('http://localhost:3001/post/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [regusername, setregUserName] = useState();
    const [regpassword, setregPassword] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setphoneNumber] = useState();

    // document.getElementsByid('register').style.display = 'hidden';

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    const reg = async e => {
        e.preventDefault();
        const token = await regUser({
            regusername,
            regpassword,
            email,
            phoneNumber
        });
    }

    return (
        <div className="login-wrapper">
            <div className="login" id='login'>
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input required type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input required type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="register" id='register' >
                <h1>Please Sign Up</h1>
                <form onSubmit={reg}>
                    <label>
                        <p>Username</p>
                        <input required type="text" onChange={e => setregUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input required type="password" onChange={e => setregPassword(e.target.value)} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input required type="email" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input required type="number" onChange={e => setphoneNumber(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* <p><a href="./Register.js">Click to Register</a></p> */}
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};