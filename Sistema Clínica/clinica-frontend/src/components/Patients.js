import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pacientes/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setPatients(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Pacientes</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.nome_completo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Patients;
