// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Eleve() {
//   const [eleves, setEleves] = useState([]);

//   useEffect(() => {
//     const fetchEleves = async () => {
//       try {
//         const token = JSON.parse(localStorage.getItem('tokenUser')).token;
//         const response = await axios.get('http://localhost:3000/eleve', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setEleves(response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des élèves :", error);
//       }
//     };

//     fetchEleves();
//   }, []);

//   return (
//     <section>
//       <h2>Informations des Élèves</h2>
//       {eleves.length > 0 ? (
//         <ul>
//           {eleves.map(eleve => (
//             <li key={eleve.id_El}>
//               <p><strong>Nom:</strong> {eleve.nom}</p>
//               <p><strong>Postnom:</strong> {eleve.postnom}</p>
//               <p><strong>Prénom:</strong> {eleve.prenom}</p>
//               <p><strong>Sexe:</strong> {eleve.sexe}</p>
//               <p><strong>Adresse:</strong> {eleve.adresse}</p>
//               <p><strong>Email:</strong> {eleve.email}</p>
//               <p><strong>Téléphone:</strong> {eleve.telephone}</p>
//               <p><strong>Classe:</strong> {eleve.classe}</p>
//               {/* Ajoute d'autres champs si nécessaire */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Aucun élève trouvé.</p>
//       )}
//     </section>
//   );
// }

// export default Eleve;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";


// function Eleve() {
//     const [eleves, setEleves] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

                
                

// // Décoder le token



// useEffect(() => {
//     // Récupérer les informations de l'utilisateur à partir de localStorage
//     const userData = JSON.parse(localStorage.getItem('user'));

//     if (userData && userData.telephone) {
//         const userPhone = userData.telephone;

//         // Faire une requête pour récupérer tous les élèves
//         axios.get("http://localhost:3000/eleve")
//             .then(res => {
//                 console.log("Données des élèves récupérées :", res.data); // Vérification des données récupérées

//                 // Filtrer les élèves en fonction du numéro de téléphone de l'utilisateur
//                 const filteredEleves = res.data.filter(eleve => eleve.telephone === userPhone);

//                 console.log("Élèves filtrés :", filteredEleves); // Vérification des élèves filtrés

//                 // Mettre à jour l'état avec la liste des élèves filtrés
//                 setEleves(filteredEleves);
//             })
//             .catch(error => {
//                 console.error("Erreur lors de la récupération des élèves:", error);
//             });
//     } else {
//         console.error("Utilisateur non trouvé ou numéro de téléphone manquant.");
//     }
// }, []);

//     const userData = localStorage.getItem('user');
    
//     const filterEleve = eleves.filter((eleve) => {
//         return eleve.telephone == userData.telephone
//     })

    

//     return (
//         <section style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ marginBottom: '20px', color: '#333' }}>Informations des Élèves</h2>
//         {loading && <p>Chargement...</p>}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {eleves.length > 0 ? (
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//                 {eleves.map(eleve => (
//                     <li key={eleve.id_El} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
//                         <p><strong>Nom:</strong> {eleve.nom}</p>
//                         <p><strong>Postnom:</strong> {eleve.postnom}</p>
//                         <p><strong>Prénom:</strong> {eleve.prenom}</p>
//                         <p><strong>Sexe:</strong> {eleve.sexe}</p>
//                         <p><strong>Adresse:</strong> {eleve.adresse}</p>
//                         <p><strong>Email:</strong> {eleve.email}</p>
//                         <p><strong>Téléphone:</strong> {eleve.telephone}</p>
//                         <p><strong>Classe:</strong> {eleve.classe}</p>
//                         {/* Ajoute d'autres champs si nécessaire */}
//                     </li>
//                 ))}
//             </ul>
//         ) : (
//             !loading && <p>Aucun élève trouvé.</p>
//         )}
//     </section>
    
//     );
// }

// export default Eleve;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Eleve() {
    const [eleves, setEleves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData && userData.telephone) {
            const userPhone = userData.telephone;

            axios.get("http://localhost:3000/eleve")
                .then(res => {
                    console.log("Données des élèves récupérées :", res.data);
                    const filteredEleves = res.data.filter(eleve => eleve.telephone === userPhone);
                    console.log("Élèves filtrés :", filteredEleves);
                    setEleves(filteredEleves);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des élèves:", error);
                    setError("Erreur lors de la récupération des données.");
                    setLoading(false);
                });
        } else {
            console.error("Utilisateur non trouvé ou numéro de téléphone manquant.");
            setLoading(false);
        }
    }, []);

    // Actions des boutons
    const handlePresence = (eleveId) => {
        console.log(`Présence pour l'élève ${eleveId}`);
        // Logique pour marquer la présence
    };

    const handleCommuniquer = (eleveId) => {
        console.log(`Communiquer avec l'élève ${eleveId}`);
        // Logique pour communiquer
    };

    const handleSortie = (eleveId) => {
        console.log(`Sortie pour l'élève ${eleveId}`);
        // Logique pour gérer la sortie
    };

    const handleNotification = (eleveId) => {
        console.log(`Notification pour l'élève ${eleveId}`);
        // Logique pour envoyer une notification
    };

    return (
        <section style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Informations des Élèves</h2>
            {loading && <p>Chargement...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {eleves.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {eleves.map(eleve => (
                        <li key={eleve.id_El} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
                            <p><strong>Nom:</strong> {eleve.nom}</p>
                            <p><strong>Postnom:</strong> {eleve.postnom}</p>
                            <p><strong>Prénom:</strong> {eleve.prenom}</p>
                            <p><strong>Sexe:</strong> {eleve.sexe}</p>
                            <p><strong>Adresse:</strong> {eleve.adresse}</p>
                            <p><strong>Email:</strong> {eleve.email}</p>
                            <p><strong>Téléphone:</strong> {eleve.telephone}</p>
                            <p><strong>Classe:</strong> {eleve.classe}</p>

                            {/* Boutons ajoutés */}
                            <div style={{ marginTop: '10px' }}>
                                <button 
                                    onClick={() => handlePresence(eleve.id_El)} 
                                    style={{ marginRight: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
                                    Présence
                                </button>
                                <button 
                                    onClick={() => handleCommuniquer(eleve.id_El)} 
                                    style={{ marginRight: '10px', padding: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px' }}>
                                    Communiquer
                                </button>
                                <button 
                                    onClick={() => handleSortie(eleve.id_El)} 
                                    style={{ marginRight: '10px', padding: '10px', backgroundColor: '#FF5722', color: 'white', border: 'none', borderRadius: '5px' }}>
                                    Sortie
                                </button>
                                <button 
                                    onClick={() => handleNotification(eleve.id_El)} 
                                    style={{ padding: '10px', backgroundColor: '#FFEB3B', color: 'black', border: 'none', borderRadius: '5px' }}>
                                    Notification
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>Aucun élève trouvé.</p>
            )}
        </section>
    );
}

export default Eleve;

