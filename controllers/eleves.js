// const prisma = require("../db/prisma");


// const getEleves = async (req, res) => {
//     try {
//         const eleves = await prisma.eleve.findMany();
//         res.status(200).json(eleves);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des élèves :", error);
//         res.status(500).json({ message: "Erreur lors de la récupération des élèves" });
//     }
// };

// // Route POST pour créer un nouvel élève
// const createEleve = async (req, res) => {
//     try {

//         // Création de l'élève dans la base de données
//         const eleve = await prisma.eleve.create({
//             data: {
//                 nom: req.body.nom,
//                 postnom: req.body.postnom,
//                 prenom: req.body.prenom,
//                 sexe: req.body.sexe,
//                 adresse: req.body.adresse,
//                 email: req.body.email,
//                 telephone: parseInt(req.body.telephone, 10),
//                 classe:req.body.classe,
//                 usId: parseInt(req.body.usId, 10) // Convertir l'ID du tuteur en entier
//             }
//         })

//         // Renvoi de la réponse avec l'élève créé
//         res.status(201).json(eleve);
//     } catch (error) {
//         console.error("Erreur lors de la création de l'élève :", error);
//         res.status(500).json({ message: "Erreur lors de la création de l'élève" });
//     }
// };


// module.exports = {
//     getEleves,
//     createEleve
// };

// const prisma = require("../db/prisma");

// // Récupérer tous les élèves
// const getEleves = async (req, res) => {
//     try {
//         const eleves = await prisma.eleve.findMany();
      
//         res.status(200).json(eleves);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des élèves :", error);
//         res.status(500).json({ message: "Erreur lors de la récupération des élèves" });
//     }

    

// }

// //----------------------------------------------------------------------------------------------------------test

// // Route POST pour créer un nouvel élève
// const createEleve = async (req, res) => {
//     try {
//         const { telephone, nom, postnom, prenom, sexe, adresse, email, classe, tuteurId } = req.body;
//         const phoneNumber = parseInt(telephone, 10);

//         // Rechercher un utilisateur avec le numéro de téléphone fourni
//         const userByPhone = await prisma.user.findUnique({
//             where: {
//                 telephone: phoneNumber,
//             },
//         });

//         // Associer l'élève à l'utilisateur trouvé par téléphone
//         const userId = userByPhone ? userByPhone.id : null;

//         // Créer l'élève
//         const eleve = await prisma.eleve.create({
//             data: {
//                 nom: nom,
//                 postnom: postnom,
//                 prenom: prenom,
//                 sexe: sexe,
//                 adresse: adresse,
//                 email: email,
//                 telephone: phoneNumber,
//                 classe: classe,
//                 usId: tuteurId || userId, // Associer l'élève à l'utilisateur par `tuteurId` ou par numéro de téléphone
//             },
//         });

//         // Message de confirmation
//         const message = tuteurId
//             ? "Élève créé et associé au tuteur spécifié par ID."
//             : userByPhone
//             ? "Élève créé et associé au tuteur trouvé par numéro de téléphone."
//             : "Élève créé sans tuteur associé.";

//         // Renvoi de la réponse avec l'élève créé
//         res.status(201).json({ message, eleve });
//     } catch (error) {
//         console.error("Erreur lors de la création de l'élève :", error);
//         res.status(500).json({ message: "Erreur lors de la création de l'élève" });
//     }
// };

// module.exports = {
//     getEleves,
//     createEleve
// };


const prisma = require("../db/prisma");

// Récupérer tous les élèves
const getEleves = async (req, res) => {
    try {
        const eleves = await prisma.eleve.findMany({
            include: {
                presences: true,
                sorties: true,
                communiques: true,
                notifications: true,
            },
        });
        res.status(200).json(eleves);
    } catch (error) {
        console.error("Erreur lors de la récupération des élèves :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des élèves" });
    }
};

// Route POST pour créer un nouvel élève
const createEleve = async (req, res) => {
    try {
        const { nom, postnom, prenom, sexe, adresse, email, telephone, classe, presences, sorties, communiques, notifications, tuteurId } = req.body;
        const phoneNumber = parseInt(telephone, 10);

        // Rechercher un utilisateur avec le numéro de téléphone fourni
        const userByPhone = await prisma.user.findUnique({
            where: {
                telephone: phoneNumber,
            },
        });

        // Associer l'élève à l'utilisateur trouvé par téléphone ou par `tuteurId`
        const userId = tuteurId || (userByPhone ? userByPhone.id : null);

        // Créer l'élève avec ses relations (presences, sorties, communiqués, notifications)
        const eleve = await prisma.eleve.create({
            data: {
                nom: nom,
                postnom: postnom,
                prenom: prenom,
                sexe: sexe,
                adresse: adresse,
                email: email,
                telephone: phoneNumber,
                classe: classe,
                usId: userId, // Associer l'élève à l'utilisateur par ID ou numéro de téléphone
                presences: {
                    create: presences.map(presence => ({
                        date: new Date(presence.date).toISOString(), // Convertir la date au format ISO
                        etat: presence.etat,
                    })),
                },
                sorties: {
                    create: sorties.map(sortie => ({
                        date: new Date(sortie.date).toISOString(), // Convertir la date au format ISO
                        raison: sortie.raison,
                    })),
                },
                communiques: {
                    create: communiques.map(communique => ({
                        date: new Date(communique.date).toISOString(), // Convertir la date au format ISO
                        texte: communique.texte,
                    })),
                },
                notifications: {
                    create: notifications.map(notification => ({
                        date: new Date(notification.date).toISOString(), // Convertir la date au format ISO
                        message: notification.message,
                    })),
                },
            },
            include: {
                presences: true,
                sorties: true,
                communiques: true,
                notifications: true,
            },
        });

        // Renvoi de la réponse avec l'élève créé
        res.status(201).json({ message: "Élève créé avec succès.", eleve });
    } catch (error) {
        console.error("Erreur lors de la création de l'élève :", error);
        res.status(500).json({ message: "Erreur lors de la création de l'élève" });
    }
};
module.exports = {
    getEleves,
    createEleve
};
