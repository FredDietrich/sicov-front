import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../reducer/exampleReducer';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.example.value);
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())} >Aumenta</button>
      <Link to="/value">Ir</Link>
    </div>
  );
}

export default App;