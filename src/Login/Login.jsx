import React from 'react';
import './Login.css';

import Button from 'react-bootstrap/Button';

import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    const [localUserName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', localUserName);
        onAuthChange(localUserName, AuthState.Authenticated);
    }

    async function createUser() {
        localStorage.setItem('userName', localUserName);
        onAuthChange(localUserName, AuthState.Authenticated);
    }

    //right now loginUser and createUser do the same thing, because we don't have a database to access and authenticate

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
                <Button variant='primary' onClick={() => loginUser()} disabled={!localUserName || !password}>
                    Login
                </Button>
                <Button variant='secondary' onClick={() => createUser()} disabled={!localUserName || !password}>
                    Create
                </Button>
            </form>
        </main>
    );
}