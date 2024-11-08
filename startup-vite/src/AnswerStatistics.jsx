// JavaScript source code
import React from 'react';
import { Link } from 'react-router-dom';
import '../../AnswerStatistics.css';

function AnswerStats() {
    return (
        <div>
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

                <form method="get" action="#">
                    <div>
                        <button type="button">Log Out</button>
                    </div>
                </form>
        </div>
    );
}

export default AnswerStats;