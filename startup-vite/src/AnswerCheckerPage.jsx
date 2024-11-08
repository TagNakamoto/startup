// JavaScript source code
import React from 'react';
import { Link } from 'react-router-dom';
import './indexcss.css';

function AnswerChecker() {
    return (
        <div>
            <h2>Welcome to the Answer Checker</h2>
            <form method="get" action="#">
                <div>
                    <span>Username</span>
                    <input type="text" placeholder="your username" />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default AnswerChecker;