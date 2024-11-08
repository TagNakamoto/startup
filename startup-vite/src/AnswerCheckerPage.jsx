// JavaScript source code
import React from 'react';
import { Link } from 'react-router-dom';
import '../../AnswerCheckerPage.css';

function AnswerChecker() {
    return (
        <div>
            <h2>Input your calculated value for the homework</ h2>
            <form method="get" action="#">
                <div>
                    <span>Question 1</span>
                    <input type="number" placeholder="your answer" />
                </div>
                    <button type="submit">Check</button>
            </form>
            <form method="get" action="#">
                <div>
                    <button type="button">Log Out</button>
                </div>
            </form>
        </div>
    );
}

export default AnswerChecker;