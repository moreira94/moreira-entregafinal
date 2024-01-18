import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'

export const ItemDetail = ({item} ) => {
  return (
    <div className='card-detail-container' key={item.id}>
        <div className='card-detail'>
                    <h2>{item.title}</h2>
                    <div className='detail-img'>
                    <img className='card-img' src={"https://image.tmdb.org/t/p/w200"+item.poster_path} alt={item.title} />
                    </div>
                    <h4>
                        Sinopsis: {item.overview}
                    </h4>
                    <p>Año: {item.release_date?.slice(0,4) ?? "No disponible"}</p>
                    <p>Puntaje promedio: {item.vote_average?.toFixed(2) ?? "No disponible"}</p>
                    <p>Precio: US$ {item.price}</p>

                    <ItemCount inicial={1} total={item.stock} cantidad = {(cantidad) => console.log("cantidad agregada", cantidad)} item={item} />

                    </div>
    </div>
  )
}
