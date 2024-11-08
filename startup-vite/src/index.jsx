import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../indexcss.css';

function Login() {
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/AnswerCheckerPage');
    };


    const handleCreateClick = (e) => {
        e.preventDefault();
        navigate('/AnswerCheckerPage');
    };


    return (
        <div>
            <h2>Welcome to the Answer Checker</h2>
            <form method="get" action="#">
                <div>
                    <span>Username</span>
                    <input type="text" placeholder="your username" />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="button" onClick={handleLoginClick}>Login</button>*/}
                <button type="button" onClick={handleCreateClick}>Create</button>
            </form>
        </div>
    );
}

export default Login;
