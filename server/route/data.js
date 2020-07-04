const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Data = mongoose.model("Data");

route.get("/details", (req, res) => {
  res.json({
    name: "akshay",
    age: 25,
  });
});

route.post("/data", (req, res) => {
  //console.log(req.body);
  if (!req.body.name) {
    res.status(422).json({
      error: "Please enter the value",
    });
  }
  const data = new Data({
    name: req.body.name,
  });
  console.log(data);

  data
    .save()
    .then((result) => {
      res.json({
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = route;
