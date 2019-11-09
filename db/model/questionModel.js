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
const postQuestionData = (product_id, req_body) => {};

module.exports = { getQuestionData, postQuestionData };
