const express = require("express");
const app = express();
const port = 3000;
const calculator = require("./src/Calculator/index");

app.get("/", function (req, res) {
  res.send(
    `<h1>Olá mundo! Prática Express.JS</h1><br><h2>Soma é: ${calculator.soma(
      100,
      50
    )}</h2>`
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});
