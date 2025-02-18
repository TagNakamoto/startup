import React from 'react';
import './Login.css';

import { Authstate } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    return (
        <main>
            <h2>Welcome to the Answer Checker</h2>
            <form method="get" action="#">
                <div>
                    <span>Username  </span>
                    <input type="text" placeholder="your username" />
                </div>
                <div>
                    <span>Password     </span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Create</button>
            </form>
        </main>
    );
}