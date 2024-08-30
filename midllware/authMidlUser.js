const passport = require("passport");
const jwt = require("jsonwebtoken");
const prisma = require("../db/prisma");

    async function authMidlUser(req, res, next) {
        passport.authenticate('local', async (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }
    
            // Processus de connexion
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    return next(error);
                }
    
                const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3m' });
                return res.status(200).json({ token });
            });
        })(req, res, next);
    }
    

module.exports = authMidlUser;