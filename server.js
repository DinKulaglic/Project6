const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use(express.static("./"));

app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
