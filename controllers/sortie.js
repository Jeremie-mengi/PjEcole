const prisma = require("../db/prisma");
const getSortie = async (req, res) => {
    const { id_El } = req.params;

    try {
        // Assurez-vous de convertir id_El en entier
        const eleve = await prisma.eleve.findUnique({
            where: { 
                id_El: parseInt(id_El) // Convertir id_El en Int
            },
            include: {
                sorties: true // Inclure les sorties associées à l'élève
            }
        });
    
        if (!eleve) {
            return res.status(404).json({ error: "Élève non trouvé" });
        }
    
        // Retourner uniquement les sorties
        res.json(eleve.sorties);
    } catch (error) {
        console.error("Erreur lors de la récupération des sorties:", error);
        res.status(500).json({ error: "Erreur lors de la récupération des présences" });
    }
}
module.exports = {
    getSortie
};