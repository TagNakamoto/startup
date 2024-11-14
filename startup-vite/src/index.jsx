import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../indexcss.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    const handleLoginClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: "post",
                body: JSON.stringify({ username, password }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            });
            if (response.ok) {
                const token = await response.json();
                navigate('/AnswerCheckerPage');
            }
            else {
                const errorData = await response.json();
                setDisplayError(errorData.msg);
            }
        }
        catch (err) {
            setDisplayError("There was an error in your login");
        }
        
    };


    const handleCreateClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/create', {
                method: "post",
                body: JSON.stringify({ username, password }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            });
            if (response.ok) {
                const token = await response.json();
                navigate('/AnswerCheckerPage');
            }
            else {
                const errorData = await response.json();
                setDisplayError(errorData.msg);
            }
        }
        catch (err) {
            setDisplayError("There was an error in your login");
        }
    };


    return (
        <div>
            <h2>Welcome to the Answer Checker</h2>
            <form method="get" action="#">
                <div>
                    <span>Username</span>
                    <input type="text" placeholder="your username" value={username} onChange={(e) =>setUsername(e.target.value) } />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value) } />
                </div>
                <button type="button" onClick={handleLoginClick}>Login</button>
                <button type="button" onClick={handleCreateClick}>Create</button>
            </form>
        </div>
    );
}

export default Login;
