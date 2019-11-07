const router = require("express").Router();

//routes for questions
router.get("/:product_id", (req, res) => {
  res.send("geting all questions");
});

router.post("/:product_id", (req, res) => {
  res.send("trying to post a questions");
});

router.put("/question/:question_id/helpful", (req, res) => {
  res.send("mark question as helpful");
});
router.put("/question/:question_id/report", (req, res) => {
  res.send("report questions");
});

module.exports = router;
