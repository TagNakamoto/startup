const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

//Router
var apiRouter = express.Router();
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
function setAuthCookie(res, user) {
    user.token = uuid.v4();

    res.cookie(authCookieName, user.token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        email: email,
        password: passwordHash,
    };
    users.push(user);

    return user;
}

function getUser(field, value) {
    if (value) {
        return users.find((user) => user[field] === value);
    }
    return null;
}

//Create User
app.post('/api/auth/create', async (req, res) => {
    if (await getUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);
        setAuthCookie(res, user);
        res.send({ email: user.email });
    }
})

//Log in User
app.post('/api/auth/login', async (req, res) => {
    const user = await getUser('email', req.body.email);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        setAuthCookie(res, user);
        res.send({ email: user.email });
    }
    else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
})