// app.js
dotenv.config()
const express = require('express');
const app = express();
const cors = require("cors")
const PORT = process.env.PORT;

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur http://localhost:${PORT}`);
});
