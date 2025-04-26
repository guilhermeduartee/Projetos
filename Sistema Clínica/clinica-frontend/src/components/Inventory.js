import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/produtos/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Controle de Estoque</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.nome} - {product.quantidade_estoque}</li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
