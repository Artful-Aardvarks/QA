const router = require("express").Router();

//routes for answers
router.get("/:question_id/answers", (req, res) => {
  res.send("geting all answers");
});

router.post("/:question_id/answers", (req, res) => {
  res.send("trying to post a answer");
});

router.get("/answer/:answer_id/helpful", (req, res) => {
  res.send("mark answer as helpful");
});
router.get("/answer/:answer_id/report", (req, res) => {
  res.send("report an answers");
});

module.exports = router;
