const express = require('express');

const app = express();

app.use(express.json());

function funcTimer() {
  console.log(`Chegou aqui...`);
}


app.listen(3333, () => {
  setInterval(funcTimer, 3000);
})