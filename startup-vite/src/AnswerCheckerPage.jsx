// JavaScript source code
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../AnswerCheckerPage.css';
import { useNavigate } from 'react-router-dom';

function AnswerChecker() {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState('');
    const [message, setMessage] = useState('');
    const handleLogoutClick = (e) => {
        e.preventDefault();
        navigate('/');
    };
    function handleCheck(e) {
        e.preventDefault;
        const answer = document.getElementById("answer");

    }

    return (
        <div>
            <h2>Input your calculated value for the homework</ h2>
            <form method="get" action="#">
                <div>
                    <span>Question 1</span>
                    <input type="number" id="answer" placeholder="your answer" />
                </div>
                    <button type="submit">Check</button>
            </form>

            <form method="get" action="#">
                <div>
                    <button type="button" onClick={handleLogoutClick}>Log Out</button>
                </div>
            </form>
        </div>
    );
}

export default AnswerChecker;