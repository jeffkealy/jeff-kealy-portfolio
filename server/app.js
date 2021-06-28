const express = require("express");
const app = express();
const path = require("path");
const LOCALPORT = 3000;
const portDecision = process.env.PORT || LOCALPORT;

app.use(express.static("public"));
app.get("/fr-be", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/views/fr-be.html"));
});
app.get("/nl-be", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/views/nl-be.html"));
});
app.get("/page2", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/views/page2.html"));
});
app.get("/page3", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/views/page3.html"));
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

app.listen(portDecision, () => console.log("Listening on port: ", portDecision));
