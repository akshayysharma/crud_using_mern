const express = require("express");
const route = require("./route");
var cors = require("cors");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys/keys");
const app = express();

// connection to DB
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => console.log("DB connected"));
mongoose.connection.on("error", (e) => console.log("error", e));

app.use(cors());
app.use("/api/", route);

app.listen(5000, () => console.log("running at 5000"));
