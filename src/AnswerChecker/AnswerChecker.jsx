import React from 'react';
import './AnswerChecker.css';

export function AnswerChecker() {
    return (
        <main>
            <h2>Input your calculated value for the homework</h2>
            <form method="get" action="#">
                <div>
                    <span>Question 1</span>
                    <input type="number" placeholder="your answer" />
                    <button type="submit">Check</button>
                </div>
                
            </form>
            <b>Keep Up The Good Work!</b>
            <div className="logOut">
                <form method="get" action="#">

                    <button type="button">Log Out</button>

                </form>
            </div>
        </main>
    );
}