const mongoose = require("mongoose");

const inputSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

mongoose.model("Input", inputSchema);
