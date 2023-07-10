const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("working");
});
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Your app is listening on PORT`, PORT);
});
