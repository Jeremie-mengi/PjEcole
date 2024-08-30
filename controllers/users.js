// const prisma = require("../db/prisma");

// // Créer un tuteur et l'associer à un élève existant
// const createTuteurAndUpdateEleve = async (req, res) => {
//     try {
//         // Création du tuteur
//         const user = await prisma.tuteur.create({
//             data: {
//                 nom: req.body.nom,
//                 postnom: req.body.postnom,
//                 email: req.body.email,
//                 password: req.body.password,
//                 telephone: parseInt(req.body.telephone, 10)
//             }
//         });

//         // Mise à jour de l'élève avec l'ID du tuteur
//         const updatedEleve = await prisma.eleve.update({
//             where: { id_El: parseInt(req.body.eleveId, 10) },
//             data: { usId: user.id_Us }
//         });

//         res.status(200).json({ tuteur: user, updatedEleve });
//     } catch (error) {
//         console.error("Erreur lors de la création du tuteur ou de la mise à jour de l'élève :", error);
//         res.status(500).json({ message: "Erreur lors de la création du tuteur ou de la mise à jour de l'élève" });
//     }
// };

// module.exports = {
// createTuteurAndUpdateEleve
// };

const { use } = require("express/lib/router");
// const prisma = require("../db/prisma");

// // Créer un tuteur
// const createTuteur = async (req, res) => {
//     try {
//         const user = await prisma.user.create({
//             data: {
//                 nom: req.body.nom,
//                 postnom: req.body.postnom,
//                 email: req.body.email,
//                 password: req.body.password,
//                 telephone: parseInt(req.body.telephone, 10)
//             }
//         });

//         res.status(201).json(user);
//     } catch (error) {
//         console.error("Erreur lors de la création du tuteur :", error);
//         res.status(500).json({ message: "Erreur lors de la création du tuteur" });
//     }
// };

// module.exports = {
// createTuteur
// };

const prisma = require("../db/prisma");
// Récupérer tous les élèves
const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                eleves: true, // Inclure les élèves associés à chaque utilisateur
            },
        });
        res.status(200).json(users);
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
    }
};


// Créer un tuteur et vérifier s'il existe un élève avec le même numéro de téléphone
const createTuteur = async (req, res) => {
    try {
        // Créer un nouvel utilisateur (tuteur)
        const passwordHashed = bcrypt.hashSync(req.body.password, 10);
        const user = await prisma.user.create({
            data: {
                nom: req.body.nom,
                postnom: req.body.postnom,
                email: req.body.email,
                password: passwordHashed,
                telephone: parseInt(req.body.telephone, 10)
            }
        });

        // Vérifier s'il existe un ou plusieurs élèves avec le même numéro de téléphone
        const eleves = await prisma.eleve.findMany({
            where: { telephone: parseInt(req.body.telephone, 10) }
        });

        if (eleves.length > 0) {
            // Si un ou plusieurs élèves sont trouvés, les associer au tuteur
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
            // Si aucun élève n'est trouvé, renvoyer un message indiquant qu'il n'y a pas d'élève
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


