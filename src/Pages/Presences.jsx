import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Presence() {
    const { id_El } = useParams();
    const [presences, setPresences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/eleve/${id_El}/presences`)
            .then(res => {
                setPresences(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des présences:", error);
                setLoading(false);
            });
    }, [id_El]);

    return (
        <div>
            <h2>Présences de l'élève</h2>
            {loading ? <p>Chargement...</p> : (
                <ul>
                    {presences.map((presence, index) => (
                        <li key={index}>Date: {new Date(presence.date).toLocaleDateString()}, État: {presence.etat}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Presence;
