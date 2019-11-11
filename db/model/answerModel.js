const { Answer } = require("../index.js");

const getAnswerData = question_id => {
  return Answer.find({ question_id: question_id });
};
const postAnswerData = (question_id, req_body) => {
  return Answer.estimatedDocumentCount((err, count) => {
    if (err) {
      console.log(err);
    }
    let answer_id = count + 1;
    let p_count = 0;
    let photos = req_body.photos.map(photo => {
      p_count += 1;
      return { id: answer_id + p_count, url: photo };
    });
    let new_answer = {
      answer_id: answer_id,
      question_id: question_id,
      body: req_body.body,
      date: new Date(),
      answerer_name: req_body.name,
      answerer_email: req_body.email,
      photos: photos
    };
    return Answer.create(new_answer);
  });
};
const markAnswerHelpfulData = answer_id => {
  return Answer.findOneAndUpdate(
    { answer_id: answer_id },
    { $inc: { helpfulness: 1 } }
  );
};

const reportAnswerData = answer_id => {
  return Answer.findOneAndUpdate(
    { answer_id: answer_id },
    { $inc: { reported: 1 } }
  );
};

module.exports = {
  getAnswerData,
  postAnswerData,
  markAnswerHelpfulData,
  reportAnswerData
};
