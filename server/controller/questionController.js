const { getQuestionData } = require("../../db/model/questionModel.js");

const getQuestion = (req, res) => {
  getQuestionData(req.params.product_id).exec((err, questions) => {
    if (err) {
      console.log(err);
    }
    console.log(questions);
    res.send(JSON.stringify(quesitons));
  });
};

module.exports = { getQuestion };
