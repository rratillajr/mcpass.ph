import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (props) => (
    <div className='home'>
      <h1><Link to="/scan">SCANNER</Link></h1>
      <h1><Link to="/reg/rider">RIDER REGISTRATION</Link></h1>
      <h1><Link to="/reg/backRide">BACKRIDE REGISTRATION</Link></h1>
    </div>
)