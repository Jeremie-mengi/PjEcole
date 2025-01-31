const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser'); // Pour parser le JSON
const dotenv = require('dotenv');
const passport = require("passport");
const eleveRoutes = require('./routes/eleves'); // Assurez-vous que le chemin est correct
const userRouteur = require("./routes/user")
const presen = require("./routes/presences.js")
const sortie = require ("./routes/sorties.js")
const login = require("./routes/authUser.js");
const countEleves = require("./routes/countEleves.js")
const configPassport = require("./auth/usAuth"); // Importez la configuration de Passport
const countPres = require("./routes/countPresences.js")

// Initialiser l'application Express
const app = express();

// Initialiser dotenv pour charger les variables d'environnement
dotenv.config();

// Middleware pour parser le JSON
app.use(bodyParser.json()); 
app.use(cors());

// Initialiser Passport
app.use(passport.initialize());
passport.use(configPassport); // Utilisez la configuration de Passport

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Utiliser les routes pour les utilisateurs et l'authentification
app.use("/register", userRouteur);
app.use("/login", login);

// Utiliser les routes pour les élèves
app.use('/eleve', eleveRoutes);
app.use('/', presen);
app.use('/',sortie );
app.use('/', countEleves);
app.use('/', countPres);








// Définir le port à écouter
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en écoute sur le port ${PORT}`);
});
