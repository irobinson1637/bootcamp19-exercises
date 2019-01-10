const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/View"));
app.use(express.static(__dirname + "/Script"));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/home.html'));
});

app.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/table.html'));
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/info.html'));
});



app.listen(3000);
console.log("Running at port 3000");
