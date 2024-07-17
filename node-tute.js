const express = require("express");
const nodeApp = express();

nodeApp.listen(4500, console.log("Server connected with node-tute.js in 4500 Port"));

nodeApp.get("/", (req, res) => {
  res.send("Welcome to Node Tutorial");
})