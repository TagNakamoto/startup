// JavaScript source code
import React from 'react';
import { Link } from 'react-router-dom';
import '../../AnswerStatistics.css';
import { useNavigate } from 'react-router-dom';

function AnswerStats() {
    const navigate = useNavigate();
    const handleLogoutClick = (e) => {
        e.preventDefault();
        navigate('/');
    };

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
                    <button type="button" onClick={handleLogoutClick}>Log Out</button>
                    </div>
                </form>
        </div>
    );
}

export default AnswerStats;