import React from 'react';
import './AnswerStatistics.css';

export function AnswerStatistics() {
    return (
        <main>
            <h2>Student Answer Statistics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Question #</th>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>5/10</td>
                    </tr>
                </tbody>
            </table>
            <div className="logOut">
                <form method="get" action="#">
                
                    <button type="button">Log Out</button>
                
                </form>
            </div>
        </main>
    );
}