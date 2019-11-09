const router = require("express").Router();
const { getAnswer } = require("../controller/answerController.js");
//routes for answers
router.get("/:question_id/answers", getAnswer);

router.post("/:question_id/answers", (req, res) => {
  res.send("trying to post a answer");
});

router.put("/answer/:answer_id/helpful", (req, res) => {
  res.send("mark answer as helpful");
});
router.put("/answer/:answer_id/report", (req, res) => {
  res.send("report an answers");
});

module.exports = router;
