const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(Port, () => {
  console.log("Server At 5000");
});