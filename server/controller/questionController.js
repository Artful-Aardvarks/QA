const {
  getQuestionData,
  postQuestionData
} = require("../../db/model/questionModel.js");

const getQuestion = (req, res) => {
  getQuestionData(req.params.product_id).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    let questions = { product_id: req.params.product_id, results: [...data] };
    res.send(JSON.stringify(questions));
  });
};

const postQuestion = (req, res) => {
  console.log(req.params.product_id, req.body);
  res.sendStatus(201);
  postQuestionData(req.params.product_id, req.body).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    res.sendStatus(201);
  });
};

module.exports = { getQuestion, postQuestion };
