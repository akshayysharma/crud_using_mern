const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  // _id: {
  //   type: String,
  //   require: true,
  // },
});

mongoose.model("Data", dataSchema);
