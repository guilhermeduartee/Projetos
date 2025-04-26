import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
    const [report, setReport] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/relatorio_mensal/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setReport(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Relatórios Mensais</h1>
            <p>Total de Procedimentos: {report.total_procedimentos?.valor__sum}</p>
            <p>Total de Produtos: {report.total_produtos?.valor__sum}</p>
        </div>
    );
};

export default Reports;
