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
    const [author, setAuthor] = React.useState('Loading...');
    const [answer, setAnswer] = React.useState('Loading...');
    const [inputAnswer, setInputAnswer] = React.useState('Loading...');
    const [isCorrect, setIsCorrect] = useState(null);

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

    const api_url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/quotes/random");

    async function getapi(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const quotes = JSON.parse(data.contents);

            if (quotes && quotes.length > 0) {
                const firstQuote = quotes[0];
                setQuote(firstQuote.q); 
                setAuthor(firstQuote.a);
            }
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    }



    React.useEffect(() => {
        getapi(api_url);
    }, []);

    async function checkAnswer(inputAnswer) {
        const response = await fetch('/api/check', {
            method: 'post',
            body: JSON.stringify({ answer: inputAnswer }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            const data = await response.json();
            setIsCorrect(data.isCorrect);
        }
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
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

            <b>{quote}</b>
            <b>{author}</b>
            <div className="logOut">
                <Button variant='primary'
                    onClick={() => logout()}>
                    Log Out
                </Button>
            </div>
        </main>
    );
}