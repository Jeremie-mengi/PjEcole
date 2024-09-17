// 
const prisma = require("../db/prisma");
const bcrypt = require('bcrypt');

// Récupérer tous les utilisateurs avec les élèves associés et leurs détails
const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                eleves: {
                    include: {
                        presences: true,
                        sorties: true,
                        communiques: true,
                        notifications: true
                    }
                }
            }
        });
        res.status(200).json(users);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
};

// Créer un tuteur et associer des élèves existants
const createTuteur = async (req, res) => {
    try {
        console.log("Données reçues pour créer un tuteur :", req.body);

        // Hash du mot de passe
        const passwordHashed = bcrypt.hashSync(req.body.password, 10);

        // Création du tuteur
        const user = await prisma.user.create({
            data: {
                nom: req.body.nom,
                postnom: req.body.postnom,
                email: req.body.email,
                password: passwordHashed,
                telephone: parseInt(req.body.telephone, 10)
            }
        });

        console.log("Utilisateur créé :", user);

        // Recherche des élèves par téléphone
        const eleves = await prisma.eleve.findMany({
            where: { telephone: parseInt(req.body.telephone, 10) },
            include: {
                presences: true,
                sorties: true,
                communiques: true,
                notifications: true
            }
        });

        console.log("Élèves trouvés avec le même téléphone :", eleves);

        // Si des élèves sont trouvés, on les associe au tuteur
        if (eleves.length > 0) {
            for (const eleve of eleves) {
                await prisma.eleve.update({
                    where: { id_El: eleve.id_El },
                    data: { usId: user.id_Us }
                });
            }

            return res.status(201).json({
                message: "Tuteur créé avec succès. Un ou plusieurs élèves ont été trouvés et associés au tuteur.",
                user,
                eleves
            });
        } else {
            return res.status(201).json({
                message: "Tuteur créé avec succès. Aucun élève associé trouvé.",
                user
            });
        }
    } catch (error) {
        console.error("Erreur lors de la création du tuteur et de la vérification de l'élève :", error);
        return res.status(500).json({ message: "Erreur lors de la création du tuteur et de la vérification de l'élève" });
    }
};

module.exports = {
    createTuteur,
    getUsers
};
