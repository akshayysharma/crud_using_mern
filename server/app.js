const express = require("express");
const app = express();
const route = require("./route");
var cors = require("cors");

app.use(cors());
app.use("/api/", route);

app.listen(5000, () => console.log("running at 5000"));
