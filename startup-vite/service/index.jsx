// JavaScript source code
const express = require('express');
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

let users = {};

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

//For creating user
apiRouter.post('/auth/create', async(req, res) => {
    const user = users[req.body.username];
    if(user) {
        res.status(409).send({ msg: "Username Taken" });
    }
    else {
        const user = { username: req.body.username, password: req.body.password, token: uuid.v4() };
        users[user.username] = user;

        res.send({ token: user.token });
    }
});

//For Login to existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.username];
    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();
            res.send({ token: user.token });
            return;
        }
    }
    res.status(401).send({ msg: "Unauthorized" });
});

//For Logging out user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

app.use((_req, res) => {
    res.sendFile("index.html", { root: "public" });
});

