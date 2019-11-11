const router = require("express").Router();
const {
  getAnswer,
  postAnswer,
  markAnswerHelpful,
  reportAnswer
} = require("../controller/answerController.js");
//routes for answers
router.get("/:question_id/answers", getAnswer);

router.post("/:question_id/answers", postAnswer);

router.put("/answer/:answer_id/helpful", markAnswerHelpful);
router.put("/answer/:answer_id/report", reportAnswer);

module.exports = router;
