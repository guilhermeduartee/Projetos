import React, { useState } from 'react';
import axios from 'axios';

const Schedule = () => {
    const [form, setForm] = useState({
        paciente: '',
        data: '',
        horario: '',
        procedimento: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/agendamentos/', form, {
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
            <input type="date" name="data" value={form.data} onChange={handleChange} />
            <input type="time" name="horario" value={form.horario} onChange={handleChange} />
            <input type="text" name="procedimento" placeholder="Procedimento" value={form.procedimento} onChange={handleChange} />
            <button type="submit">Agendar</button>
        </form>
    );
};

export default Schedule;
