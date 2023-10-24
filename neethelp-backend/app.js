
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
require("dotenv").config();

var videoRouter = require("./routes/videoRouter");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");




app.use("/video", videoRouter);


module.exports = app;
