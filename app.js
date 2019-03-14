const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const startGame = function(req, res) {
  res.send("Your game key is 1234");
  res.end();
};

const joinGame = function(req, res) {
  res.send("You have joined the game.Your game is starting now...");
  res.end();
};

const instruction = function(req, res) {
  res.send("This section will have the instruction to play the game");
  res.end();
};

const playTicTacToe = function(req, res) {
  const parameter = req.body.text;
  if (parameter == "start") {
    startGame(req, res);
    return;
  }
  if (parameter.startsWith("join")) {
    joinGame(req, res);
    return;
  }
  instruction(req, res);
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", playTicTacToe);

module.exports = app;
