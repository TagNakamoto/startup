import React from 'react';
import './AnswerChecker.css';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../Login/authState';
import { useState } from 'react';
export function AnswerChecker({ userName, authState, onAuthChange }) {
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();
    const [quote, setQuote] = React.useState('Loading...');
    const [answer, setAnswer] = React.useState('Loading...');
    const [inputAnswer, setInputAnswer] = React.useState('Loading...');
    const [isCorrect, setIsCorrect] = useState(null);
  

    function logout() {
        localStorage.removeItem('userName');
        onAuthChange(userName, AuthState.Unauthenticated);
        navigate('/');
    }

    React.useEffect(() => {
        setQuote('Keep Up The Good Work!');
        setAnswer(3.14);
    }, []);

    function checkAnswer(inputAnswer) {
        if (Number(inputAnswer) === answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <main>
            <h2>Input your calculated value for the homework</h2>
            <form method="get" action="#">
                <div>
                    <span>Question 1</span>
                    <input
                        type="number"
                        placeholder="your answer"
                        value={inputAnswer}
                        onChange={(e => setInputAnswer(e.target.value)) }
                    />
                    
                </div>
                <Button variant="secondary" onClick={()=>checkAnswer(Number(inputAnswer))}>
                    Check
                </Button>
                
            </form>

            {isCorrect && (<div style={{ marginTop: '10px', color: 'black' }}>
               ✅ Correct Answer!
            </div>
            )}
            {!isCorrect && (isCorrect !==null) && (<div style={{ marginTop: '10px', color: 'black' }}>
                 ❌ Incorrect Answer, Try Again
            </div>
            )}

            <b>{ quote }</b>
            <div className="logOut">
                <Button variant='primary'
                    onClick={() => logout()}>
                    Log Out
                </Button>
            </div>
        </main>
    );
}