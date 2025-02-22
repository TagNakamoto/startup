import React from 'react';
import './AnswerStatistics.css';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../Login/authState';
export function AnswerStatistics({ userName, authState, onAuthChange }) {
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        onAuthChange(userName, AuthState.Unauthenticated);
        navigate('/')
    }

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
                <Button variant='primary'
                    onClick={() => logout()}>
                    Log Out
                </Button>
            </div>
        </main>
    );
}