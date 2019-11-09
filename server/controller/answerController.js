const { getAnswerData } = require("../../db/model/answerModel.js");

const getAnswer = (req, res) => {
  getAnswerData(req.params.question_id).exec((err, answers) => {
    if (err) {
      console.log(err);
    }
    console.log(answers);
    res.send(JSON.stringify(answers));
  });
};

module.exports = { getAnswer };
