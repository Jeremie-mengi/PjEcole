const express = require('express');
const bodyParser = require('body-parser'); // Assurez-vous d'importer body-parser si vous l'utilisez
const dotenv = require('dotenv');
const eleveRoutes = require('./routes/eleves'); // Assurez-vous que le chemin est correct
const userRouteur = require("./routes/user");

// Initialiser dotenv pour charger les variables d'environnement
dotenv.config();

// Créer une instance d'Express
const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json()); // Vous n'avez besoin que d'une seule instance de ce middleware

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Utiliser les routes pour les élèves
app.use('/eleve', eleveRoutes);
app.use("/user",userRouteur);

// Définir le port à écouter
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en écoute sur le port ${PORT}`);
});
