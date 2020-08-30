const express = require("express");
const time = require("./time");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/:date", (req, res) => {
  res.json(time(req.params.date));
});

app.listen(port, () => {
  console.log(`timestamp app listening on port ${port}`);
});
