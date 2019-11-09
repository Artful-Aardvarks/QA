const { Answer } = require("../index.js");

const getAnswerData = question_id => {
  return Answer.find({ question_id: question_id });
};

module.exports = { getAnswerData };
