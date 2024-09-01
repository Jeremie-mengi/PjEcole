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




import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Eleve() {
    const [eleves, setEleves] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEleves = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('tokenUser')).token;
                const userPhone = JSON.parse(localStorage.getItem('userPhone')); // Récupérer le numéro de téléphone du tuteur
                console.log(userPhone);
                
                
                if (!userPhone) {
                    throw new Error("Le numéro de téléphone du tuteur est requis.");
                }

                const response = await axios.get(`http://localhost:3000/eleve?telephone=${userPhone}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setEleves(response.data);
                setError(null);
            } catch (error) {
                console.error("Erreur lors de la récupération des élèves :", error);
                setError("Erreur lors de la récupération des élèves");
                setEleves([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEleves();
    }, []);

    return (
        <section>
            <h2>Informations des Élèves</h2>
            {loading && <p>Chargement...</p>}
            {error && <p>{error}</p>}
            {eleves.length > 0 ? (
                <ul>
                    {eleves.map(eleve => (
                        <li key={eleve.id_El}>
                            <p><strong>Nom:</strong> {eleve.nom}</p>
                            <p><strong>Postnom:</strong> {eleve.postnom}</p>
                            <p><strong>Prénom:</strong> {eleve.prenom}</p>
                            <p><strong>Sexe:</strong> {eleve.sexe}</p>
                            <p><strong>Adresse:</strong> {eleve.adresse}</p>
                            <p><strong>Email:</strong> {eleve.email}</p>
                            <p><strong>Téléphone:</strong> {eleve.telephone}</p>
                            <p><strong>Classe:</strong> {eleve.classe}</p>
                            {/* Ajoute d'autres champs si nécessaire */}
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
