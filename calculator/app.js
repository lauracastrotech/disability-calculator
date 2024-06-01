// MISSING const createError = require("http-errors");

const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

const formDataRouter = require("./routes/formdata");

const app = express();

app.use(cors()); // this enables middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res, next) {
  res.send("Access the API at path /api");
});
app.use(function myMiddleWare(req, res, next) {
  console.log("We are in the backend!");
  next();
});

app.use("/formdata", formDataRouter); //in routes need to add this before col name ex. '/formadata/firstName'

// MISSING ERROR HANDLING CODE FROM DATABASE APP

module.exports = app;
