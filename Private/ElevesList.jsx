import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

function ElevesList() {
  const [eleves, setEleves] = useState([]);

  // Récupérer la liste des élèves au chargement du composant
  useEffect(() => {
    const fetchEleves = async () => {
      try {
        const response = await axios.get('http://localhost:3000/eleve'); // Votre route pour récupérer les élèves
        setEleves(response.data);
        console.log(response.data); // Vérifiez les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des élèves :', error);
      }
    };

    fetchEleves();
  }, []);

  // Fonction pour générer le PDF avec jsPDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Ajouter le titre principal
    doc.setFontSize(16);
    doc.text('Liste des élèves', 105, 20, { align: 'center' });

    // Définir la table des élèves avec des colonnes bien définies
    const tableColumn = ["#", "Nom", "Postnom", "Prénom", "Sexe", "Adresse", "Email", "Téléphone", "Classe"];
    const tableRows = [];

    // Remplir les lignes du tableau avec les données des élèves
    eleves.forEach((eleve, index) => {
      const eleveData = [
        index + 1,
        eleve.nom || 'N/A',
        eleve.postnom || 'N/A',
        eleve.prenom || 'N/A',
        eleve.sexe || 'N/A',
        eleve.adresse || 'N/A',
        eleve.email || 'N/A',
        eleve.telephone || 'N/A',
        eleve.classe || 'N/A',
      ];
      tableRows.push(eleveData);
    });

    // Ajouter le tableau des élèves au PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: 'grid', // Ajoute un style de grille pour rendre le tableau plus propre
      styles: { fontSize: 10 }, // Ajuster la taille de la police pour un rendu plus propre
      headStyles: { fillColor: [0, 0, 102] }, // Couleur de fond des en-têtes (bleu foncé)
      margin: { top: 20 }
    });

    // Enregistrer le PDF avec un nom propre
    doc.save('Liste_des_eleves.pdf');
  };

  return (
    <div>
      <h1>Liste des élèves</h1>
      <ul>
        {eleves.map((eleve, index) => (
          <li key={eleve.id}>
            {index + 1}. {eleve.nom} {eleve.postnom} {eleve.prenom} - Sexe: {eleve.sexe}, Adresse: {eleve.adresse}, 
            Email: {eleve.email}, Téléphone: {eleve.telephone}, Classe: {eleve.classe}
          </li>
        ))}
      </ul>
      <button onClick={generatePDF}>Imprimer la liste des élèves en PDF</button>
    </div>
  );
}

export default ElevesList;
