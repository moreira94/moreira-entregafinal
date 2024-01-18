import React from 'react';
import { Link } from "react-router-dom";


export const Filtro = () => {
  return (
    <div className='filtro-container'>
        <div className='filtro-title'>
        <h1>Selecciona las películas por década</h1>
        </div>
            <ul className='filtro-items'>
                <li><Link className='filtro-link' to="/">Todas</Link></li>
                <li><Link className='filtro-link' to="/movies/1950">1950</Link></li>
                <li><Link className='filtro-link' to="/movies/1960">1960</Link></li>
                <li><Link className='filtro-link' to="/movies/1970">1970</Link></li>
                <li><Link className='filtro-link' to="/movies/1980">1980</Link></li>
                <li><Link className='filtro-link' to="/movies/1990">1990</Link></li>
                <li><Link className='filtro-link' to="/movies/2000">2000</Link></li>
                <li><Link className='filtro-link' to="/movies/2010">2010</Link></li>

            </ul>


    </div>
  )
}
