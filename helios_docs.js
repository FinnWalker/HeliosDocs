const path = require("path");

const express = require("express");
const app = express();

app.use("/documentation/demo", express.static("demo"));
app.use("/documentation", express.static("documentation"));

const port = 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});
