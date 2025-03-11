import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { AnswerChecker } from './AnswerChecker/AnswerChecker';
import { AnswerStatistics } from './AnswerStatistics/AnswerStatistics';
import { AuthState } from './login/authState';
import { PrivateRoute } from './login/PrivateRoute'

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            
                <header>
                    <h1>
                        Answer Checker <img alt="Checkmark" width="30" height="30" src="https://www.publicdomainpictures.net/pictures/130000/velka/check-mark-icon.jpg" />
                    </h1>
                    <menu>
                    <div className='nav-menu'>
                            {authState !== AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink to='/'>Login</NavLink>
                            </li>
                            )}

                            {authState == AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink to='/AnswerChecker'>Answer Checker</NavLink>
                                </li>
                            )}
                            {authState == AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink to='/AnswerStatistics'>Answer Statistics</NavLink>
                                </li>
                            )}
                        </div>
                    </menu>
                </header>

                <main>
                    <Routes>
                        <Route path='/'
                            element={<Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />}
                    />
                    <Route
                        path="/AnswerStatistics"
                        element={
                            <PrivateRoute
                                element={
                                    <AnswerStatistics
                                        userName={userName}
                                        authState={authState}
                                        onAuthChange={(userName, authState) => {
                                            setAuthState(authState);
                                            setUserName(userName);
                                        }}
                                    />
                                }
                                isAuthenticated={authState === AuthState.Authenticated}
                            />
                        }
                    />
                        <Route
                            path="/AnswerChecker"
                            element={
                                <PrivateRoute
                                    element={
                                        <AnswerChecker
                                            userName={userName}
                                            authState={authState}
                                            onAuthChange={(userName, authState) => {
                                                setAuthState(authState);
                                                setUserName(userName);
                                            }}
                                        />
                                    }
                                    isAuthenticated={authState === AuthState.Authenticated}
                                />
                            }
                        />
                        
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>


                <footer>
                    <div className="container-fluid">
                        <span className="text-reset">Author: Taggart Nakamoto</span>
                        <a href="https://github.com/TagNakamoto/startup/tree/main">Project GitHub</a>
                    </div>

                </footer>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}