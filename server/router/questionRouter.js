const router = require("express").Router();
const {
  getQuestion,
  postQuestion,
  reportQuestion,
  markQuestionHelpful
} = require("../controller/questionController.js");

//routes for questions
router.get("/:product_id", getQuestion);

router.post("/:product_id", postQuestion);

router.put("/question/:question_id/helpful", markQuestionHelpful);
router.put("/question/:question_id/report", reportQuestion);

module.exports = router;
