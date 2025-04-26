import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/usuarios/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setUsers(response.data))
        .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <h1>Gestão de Usuários</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
