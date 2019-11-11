const {
  getQuestionData,
  postQuestionData,
  markQuestionHelpfulData,
  reportQuestionData
} = require("../../db/model/questionModel.js");

const getQuestion = (req, res) => {
  console.log(req.url);
  getQuestionData(req.params.product_id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    let results = data.filter(val => {
      return val["reported"] === 0;
    });
    let questions = { product_id: req.params.product_id, results: results };
    console.log(questions);
    res.send(JSON.stringify(questions));
  });
};

const postQuestion = (req, res) => {
  postQuestionData(req.params.product_id, req.body).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
};

const markQuestionHelpful = (req, res) => {
  markQuestionHelpfulData(req.params.question_id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
};

const reportQuestion = (req, res) => {
  reportQuestionData(req.params.question_id).exec((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.sendStatus(204);
  });
};

module.exports = {
  getQuestion,
  postQuestion,
  markQuestionHelpful,
  reportQuestion
};
