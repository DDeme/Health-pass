const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');

const reasonRouter = require("./routes/reason");
const certificateRouter = require("./routes/certificate");
const authRouter = require("./routes/auth");
const testRouter = require("./routes/test-results");
const keysRounter = require("./routes/keys");


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/certificate', certificateRouter)
app.use("/reason", reasonRouter)
app.use("/auth", authRouter)
app.use("/test-results", testRouter)
app.use("/keys", keysRounter)

module.exports = app;
