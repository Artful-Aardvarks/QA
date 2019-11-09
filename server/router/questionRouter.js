const router = require("express").Router();
const {
  getQuestion,
  postQuestion
} = require("../controller/questionController.js");

//routes for questions
router.get("/:product_id", getQuestion);

router.post("/:product_id", postQuestion);

router.put("/question/:question_id/helpful", (req, res) => {
  res.send("mark question as helpful");
});
router.put("/question/:question_id/report", (req, res) => {
  res.send("report questions");
});

module.exports = router;
