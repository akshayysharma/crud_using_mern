const express = require("express");
const route = express.Router();

route.get("/details", (req, res) => {
  res.json({
    name: "akshay",
    age: 25,
  });
});

route.post("/data", (req, res) => {
  console.log(req.body);
});

module.exports = route;
