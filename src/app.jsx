import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <body>
                <header>
                    <h1>
                        Answer Checker <img alt="Checkmark" width="30" height="30" src="https://www.publicdomainpictures.net/pictures/130000/velka/check-mark-icon.jpg" />
                    </h1>
                    <div className='app'>

                        {/*<NavLink to='/'>Login</NavLink>*/}
                        {/*<NavLink to='/AnswerCheckerPage'>Answer Checker</NavLink>*/}
                        {/*<NavLink to='/AnswerStatistics'>Answer Statistics</NavLink>*/}
                    </div>
                </header>

                <main>
                <div>App Goes Here</div>
                    {/*<Routes>*/}
                    {/*    <Route path='/' element={<Login />} />*/}
                    {/*    <Route path='/AnswerCheckerPage' element={<AnswerChecker />} />*/}
                    {/*    <Route path='/AnswerStatistics' element={<AnswerStats />} />*/}
                    {/*    <Route path='*' element={<Navigate to='/' replace />} />*/}
                    {/*</Routes>*/}
                </main>


                <footer>
                    <div className="container-fluid">
                        <span className="text-reset">Author: Taggart Nakamoto</span>
                        <a href="https://github.com/TagNakamoto/startup/tree/main">Project GitHub</a>
                    </div>

                </footer>

            </body>

        </BrowserRouter>
    );
}