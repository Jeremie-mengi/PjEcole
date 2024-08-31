const bcrypt = require("bcrypt");
const passport = require("passport");
const prisma = require("../db/prisma");
const LocalStrategy = require("passport-local").Strategy;

const configPassport = new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, done) => {
    try {
      console.log(`Tentative de connexion pour l'email: ${email}`);
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        console.log('Utilisateur non trouvé');
        return done(null, false, { message: "User introuvable" });
      }

      // Assurez-vous que user.password est bien le mot de passe hashé
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log('Erreur lors de la comparaison des mots de passe:', err);
          return done(err);
        }
        if (!isMatch) {
          console.log('Mot de passe incorrect');
          return done(null, false, { message: "Mot de passe incorrect" });
        }

        console.log('Connexion réussie');
        return done(null, user);
      });
    } catch (error) {
      console.error('Erreur lors de l\'authentification:', error);
      return done(error);
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  prisma.user.findUnique({ where: { id } })
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

module.exports = configPassport;
