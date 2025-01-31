const prisma = require("../db/prisma");
const getCountEleves = async (req, res) => {
    try {
        const totalStudents = await prisma.eleve.count();
        res.json({ count: totalStudents });
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre total d\'élèves :', error);
        res.status(500).json({ error: 'Une erreur est survenue.' });
      }
    };
module.exports = {
    getCountEleves
};