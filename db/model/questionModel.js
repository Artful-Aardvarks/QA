const { Question } = require("../index.js");

const getQuestionData = product_id => {
  return Question.aggregate([
    { $match: { product_id: Number(product_id) } },
    {
      $lookup: {
        from: "combined_answers2",
        localField: "id",
        foreignField: "question_id",
        as: "answers"
      }
    }
  ]);
};
const postQuestionData = (product_id, req_body) => {
  return Question.estimatedDocumentCount((err, count) => {
    if (err) {
      console.log(err);
    }
    let id = count + 1;
    let new_questions = {
      id: id,
      product_id: product_id,
      question_body: req_body.body,
      question_date: new Date(),
      asker_name: req_body.name,
      asker_email: req_body.email
    };
    return Question.create(new_questions);
  });
};

const markQuestionHelpfulData = question_id => {
  return Question.findOneAndUpdate(
    { id: question_id },
    { $inc: { question_helpfulness: 1 } }
  );
};

const reportQuestionData = question_id => {
  return Question.findOneAndUpdate(
    { id: question_id },
    { $inc: { reported: 1 } }
  );
};
module.exports = {
  getQuestionData,
  postQuestionData,
  markQuestionHelpfulData,
  reportQuestionData
};
