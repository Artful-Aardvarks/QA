const mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/QA").then(() => {
  console.log("connected to mongod");
});

const questionSchema = new Schema(
  {
    id: { type: Number, unique: true },
    product_id: Number,
    body: String,
    date_written: Date,
    asker_name: String,
    asker_email: String,
    helpful: Number,
    reported: Number
  },
  { collection: "questions" }
);

const answerSchema = new Schema(
  {
    id: { type: Number, unique: true },
    question_id: Number,
    body: String,
    date_written: Date,
    answer_name: String,
    answer_email: String,
    helpful: Number,
    reported: Number,
    url: Array
  },
  { collection: "combined_answers" }
);

const Question = mongoose.model("Question", questionSchema);
const Answer = mongoose.model("Answer", answerSchema);
module.exports = { Question, Answer };
