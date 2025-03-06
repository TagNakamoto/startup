const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const e = require('express');
const app = express();

const authCookieName = 'token';

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000

app.use(express.json);

app.use(cookieParser);

app.use(express.static('public'));

//Router
var apiRouter = express.Router();
app.use('/api', apiRouter);