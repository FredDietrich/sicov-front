import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Value() {

    const value = useSelector(state => state.example.value);

return (
    <div className='Teste'>
        <h1>Valor: {value}</h1>
        <Link to="/">Voltar</Link>
    </div>
)

}

export default Value;