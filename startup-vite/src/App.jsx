//import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import {
    BrowserRouter,
    NavLink,
    Routes,
    Navigate,
    Route
} from "https://cdn.skypack.dev/react-router-dom";
import Login from "./Index";
import AnswerChecker from "./AnswerCheckerPage"
import AnswerStats from "./AnswerStatistics"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <header>
            <h1>
                Answer Checker <img alt="Checkmark" width="30" height="30" src="https://www.publicdomainpictures.net/pictures/130000/velka/check-mark-icon.jpg" />
            </h1>
            <div className='app'>
                <NavLink to='/'>Login</NavLink>
                <NavLink to='/AnswerCheckerPage'>Answer Checker</NavLink>
                <NavLink to='/AnsweStatistics'>Answer Statistics</NavLink>
            </div>
        </header>

        <main>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/AnswerCheckerPage' element={<AnswerChecker />}/>
                <Route path='/AnswerStatistics' element={<AnswerStats />} />
                <Route path='*' element={<Navigate to='/' replace/>} />
            </Routes>
        </main>


        <footer>
            <div className="container-fluid">
                <span className="text-reset">Author:Taggart Nakamoto</span>
                <a href="https://github.com/TagNakamoto/startup/tree/main">Project GitHub</a>
            </div>

        </footer>
    </BrowserRouter>
);
