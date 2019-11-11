const {
  getAnswerData,
  postAnswerData,
  markAnswerHelpfulData,
  reportAnswerData
} = require("../../db/model/answerModel.js");

const getAnswer = (req, res) => {
  getAnswerData(req.params.question_id).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    let page = req.query.page === undefined ? 1 : req.query.page;
    let count = req.query.count === undefined ? 5 : req.query.count;
    let results = data.filter(val => {
      return val["reported"] === 0;
    });
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

const postAnswer = (req, res) => {
  console.log(req.params.question_id, req.body);
  postAnswerData(req.params.question_id, req.body).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    res.sendStatus(201);
  });
};

const markAnswerHelpful = (req, res) => {
  markAnswerHelpfulData(req.params.answer_id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
};

const reportAnswer = (req, res) => {
  reportAnswerData(req.params.answer_id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
};
module.exports = { getAnswer, postAnswer, markAnswerHelpful, reportAnswer };
