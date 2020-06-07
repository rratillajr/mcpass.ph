import React from 'react';
import './App.css';
import { MCPassRouter } from './Component/Routes/Routes.Component';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <MCPassRouter />

      <div className="footer">
        <Link to="/"><i className="fas fa-home">Home</i></Link> | <Link to="/contact"><i className="fas fa-envelope">Contact</i></Link> | <Link to="/about">MCPass.PH <i className="far fa-copyright"></i> 2020</Link>
      </div>

    </div>
  );
}

export default App;
