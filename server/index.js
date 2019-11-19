const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questionRouter = require("./router/questionRouter");
const answerRouter = require("./router/answerRouter");

//middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express routes
app.use("/qa", questionRouter);
app.use("/qa", answerRouter);
app.get("/loaderio-80a36018cb38dacd07d703b0540ff42b/", (req, res) => {
  res.send("loaderio-80a36018cb38dacd07d703b0540ff42b");
});

//server connection
let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
