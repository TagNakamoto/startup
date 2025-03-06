const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const e = require('express');
const app = express();

const authCookieName = 'token';

let users = [];

app.use(express.json);

app.use(cookieParser);

app.use(express.static('public'));

//Router
var apiRouter = express.Router();
app.use('/api', apiRouter);