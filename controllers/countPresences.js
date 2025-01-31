const prisma = require("../db/prisma");

const getPresence = async (req, res) => {
  try {
    // Regrouper et compter les présences par date
    const presencesByDate = await prisma.presence.groupBy({
      by: ['date'], // Grouper par la colonne `date`
      _count: {
        id: true, // Compter les présences (par exemple, par leur ID)
      },
    });

    // Calculer le total global des présences (somme des présences par date)
    const totalPresences = presencesByDate.reduce((sum, item) => sum + item._count.id, 0);

    res.json({ total: totalPresences }); // Retourner uniquement le total
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre total des présences :', error);
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
};

module.exports = {
  getPresence,
};
