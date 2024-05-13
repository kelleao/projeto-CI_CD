const express = require("express");
const app = express();
const calculator = require("./src/Calculator/index");

app.get("/", function (req, res) {
  res.send(
    `<h1>Olá mundo! Prática Express.JS</h1><br><h2>Soma é: ${calculator.soma(
      100,
      50
    )}</h2>`
  );
});

app.listen(3001, function () {
  console.log("Servidor esta rodando 3001");
});
