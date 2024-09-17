const prisma = require("../db/prisma");
const getPresences = async (req, res) => {
    const { id_El } = req.params;

    try {
        // Assurez-vous de convertir id_El en entier
        const eleve = await prisma.eleve.findUnique({
            where: { 
                id_El: parseInt(id_El) // Convertir id_El en Int
            },
            include: {
                presences: true // Inclure les présences associées à l'élève
            }
        });
    
        if (!eleve) {
            return res.status(404).json({ error: "Élève non trouvé" });
        }
    
        // Retourner uniquement les présences
        res.json(eleve.presences);
    } catch (error) {
        console.error("Erreur lors de la récupération des présences:", error);
        res.status(500).json({ error: "Erreur lors de la récupération des présences" });
    }
}
module.exports = {
    getPresences
};