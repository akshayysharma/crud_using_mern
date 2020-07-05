const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const Data = mongoose.model("Data");

route.get("/details", (req, res) => {
  Data.find()
    .then((post) => {
      res.json({
        name: post,
      });
    })
    .catch((error) => console.log(error));
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
