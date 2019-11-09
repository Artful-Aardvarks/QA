const { getAnswerData } = require("../../db/model/answerModel.js");

const getAnswer = (req, res) => {
  getAnswerData(req.params.question_id).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    let page = req.query.page === undefined ? 1 : req.query.page;
    let count = req.query.count === undefined ? 5 : req.query.count;
    let results = [...data];
    let answers = {
      question: req.params.question_id,
      page: page,
      count: count,
      results: results
    };
    console.log(answers);
    res.send(JSON.stringify(answers));
  });
};

module.exports = { getAnswer };
