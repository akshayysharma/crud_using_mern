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

route.put("/data/:_id", (req, res) => {
  console.log(req.params._id);
  let dataId = req.params._id;
  if (dataId.charAt(0) === ":") {
    dataId = dataId.substr(1);
  }
  console.log(req.body);
  Data.findByIdAndUpdate({ _id: dataId }, req.body).then(() => {
    Data.findOne({ _id: dataId }).then((result) => {
      console.log(result);
      res.json({ data: result });
    });
  });
});

route.delete("/data/:_id", (req, res) => {
  console.log(req.params);
  let dataId = req.params._id;
  if (dataId.charAt(0) === ":") {
    dataId = dataId.substr(1);
  }
  Data.findByIdAndRemove({ _id: dataId })
    .then((result) => {
      console.log(result);
      res.json({ data: result });
    })
    .catch((error) => console.log(error));
});

module.exports = route;
