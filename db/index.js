const mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/QA", { useFindAndModify: false })
  .then(() => {
    console.log("connected to mongod");
  });

const questionSchema = new Schema(
  {
    id: { type: Number, unique: true },
    product_id: Number,
    question_body: String,
    question_date: Date,
    asker_name: String,
    asker_email: String,
    question_helpfulness: Number,
    reported: Number
  },
  { collection: "questions" }
);

const answerSchema = new Schema(
  {
    answer_id: { type: Number, unique: true },
    question_id: Number,
    body: String,
    date: Date,
    answerer_name: String,
    answerer_email: String,
    helpfulness: Number,
    reported: Number,
    photos: Array
  },
  { collection: "combined_answers2" }
);

const Question = mongoose.model("Question", questionSchema);
const Answer = mongoose.model("Answer", answerSchema);
module.exports = { Question, Answer };
