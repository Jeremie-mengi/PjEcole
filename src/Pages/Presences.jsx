import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// CSS-in-JS styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f6f8',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: 'auto',
    marginTop: '30px',
  },
  header: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '20px',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
    textAlign : 'center'
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  listItemHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  listItemContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDate: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
  },
  itemState: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#4caf50', // Green color for state
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#999',
  },
};

// Presence component
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
        <div style={styles.container}>
            <h2 style={styles.header}>Présences de l'élève </h2>
            {loading ? (
                <p style={styles.loading}>Chargement...</p>
            ) : (
                <ul style={styles.list}>
                    {presences.map((presence, index) => (
                        <li
                            key={index}
                            style={{ ...styles.listItem, ':hover': styles.listItemHover }}
                        >
                            <div style={styles.listItemContent}>
                                <span style={styles.itemDate}>
                                    {new Date(presence.date).toLocaleDateString()}
                                </span>
                                <span style={styles.itemState}>
                                    {presence.etat}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Presence;
