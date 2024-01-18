import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ movie }) => {
    return (
        <div className='card' >
            <h2>{movie.title}</h2>
            <img className='card-img' src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt="Imagen de la pelicula" />
            <div className='card-detail'>
                <p>Año: {movie.release_date?.slice(0, 4) ?? "No disponible"}</p>
                <p>Puntaje promedio: {movie.vote_average?.toFixed(2) ?? "No disponible"}</p>
                <p>Precio: US$ {movie.price}</p>
                <p>Cantidad disponible: {movie.stock}</p>
                <br />
                <div className='btn-container'>
                    <Link to={`/Item/${movie.id}`} ><button className='btn-detail'>Ver mas</button></Link>
                    {/* <ItemDetail {...movies} /> */}
                </div>
            </div>
        </div>

    )
}
