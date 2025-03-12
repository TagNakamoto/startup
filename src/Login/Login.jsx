import React from 'react';
import './Login.css';
import '../App.css'

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    const [localUserName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();
    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', localUserName);
            onAuthChange(localUserName, AuthState.Authenticated);
            navigate('/AnswerChecker');
        }
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }
    return (
        <main>
            <h2>Welcome to the Answer Checker</h2>
            <form method="get" action="#">
                <div>
                    <span>Username  </span>
                    <input type="text"
                        placeholder="your username"
                        value={localUserName}
                        onChange={(e) => setUserName(e.target.value) }
                    />
                </div>
                <div>
                    <span>Password     </span>
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value) }
                    />
                </div>
                <Button style={{ backgroundColor: "#0D731E", borderColor: "#0D731E" }} variant='primary' onClick={() => loginUser()} disabled={!localUserName || !password}>
                    Login
                </Button>
                <Button variant='secondary' onClick={() => createUser()} disabled={!localUserName || !password}>
                    Create
                </Button>
            </form>
        </main>
    );
}