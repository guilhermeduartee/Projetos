import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Procedures = () => {
    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/procedimentos/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setProcedures(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Procedimentos</h1>
            <ul>
                {procedures.map(procedure => (
                    <li key={procedure.id}>{procedure.nome} - {procedure.valor}</li>
                ))}
            </ul>
        </div>
    );
};

export default Procedures;
