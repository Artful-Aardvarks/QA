const express = require("express");
const bodyParser = require("body-parser");
const questionRouter = require("./router/questionRouter");
const answerRouter = require("./router/answerRouter");

//middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express routes
app.use("/qa", questionRouter);
app.use("/qa", answerRouter);

//server connection
let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
