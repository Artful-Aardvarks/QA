const mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/QA").then(() => {
  console.log("connected to mongod");
});
