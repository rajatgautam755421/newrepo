const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Fuck Heroku");
});

app.listen(Port, () => {
  console.log("Server At 5000");
});
