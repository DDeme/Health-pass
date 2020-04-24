const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const reasonRouter = require("./routes/reason");
const certificateRouter = require("./routes/certificate");
const authRouter = require("./routes/auth");


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/certificate', certificateRouter);
app.use("/reason", reasonRouter);
app.use("/auth/", authRouter);

module.exports = app;
