require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

console.log('DB_HOST -->', process.env.DB_HOST);
console.log('DB_USER -->', process.env.DB_USER);
console.log('DB_PASSWORD -->', process.env.DB_PASS);
console.log('DB_PORT -->', process.env.PORT);

module.exports = app;
