import React from 'react';
import './AnswerStatistics.css';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../Login/authState';
export function AnswerStatistics({ userName, authState, onAuthChange }) {
    const [displayError, setDisplayError] = React.useState(null);
    const [numerator, setNumerator] = React.useState("Loading...");
    const [denominator, setDenominator] = React.useState("Loading...");
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {

            })
            .finally(() => {
                localStorage.removeItem('userName');
                onAuthChange(userName, AuthState.Unauthenticated);
                navigate('/');
            });
    }

    React.useEffect(() => {
        fetch('/api/stats')
            .then((response) => response.json())
            .then(({ nums, denoms }) => {
                setNumerator(nums[0]);
                setDenominator(denoms[0]);
            });
    }, []);

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
                        <td>{numerator}/{denominator}</td>
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