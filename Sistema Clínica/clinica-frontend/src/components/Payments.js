import React, { useState } from 'react';
import axios from 'axios';

const Payments = () => {
    const [form, setForm] = useState({
        paciente: '',
        valor: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pagamentos/', form, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="paciente" placeholder="Paciente" value={form.paciente} onChange={handleChange} />
            <input type="text" name="valor" placeholder="Valor" value={form.valor} onChange={handleChange} />
            <button type="submit">Enviar Pagamento</button>
        </form>
    );
};

export default Payments;
