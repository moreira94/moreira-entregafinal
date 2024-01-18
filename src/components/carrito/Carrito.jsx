import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }



    return (
        <div className='carrito-body' key={"carrito"}>
            <h1>Carrito</h1>

            <div className='carrito-info'>
                <h2 className='carrito-espacio'></h2>
                <h2 className='carrito-estilo'>Título</h2>
                <h2 className='carrito-estilo'>Cantidad</h2>
                <h2 className='carrito-estilo'>Precio Unitario</h2>
                <h2 className='carrito-estilo'>Subtotal</h2>
                <h2 className='carrito-espacio'></h2>

            </div>
            {
                carrito.map((prod) => (
                    <div className="carrito-item" key={prod.id}>
                        <img className='card-img' src={"https://image.tmdb.org/t/p/w200" + prod.poster_path} alt="Imagen de la pelicula" />

                        <h3>{prod.title}</h3>
                        <p>{prod.cantidad}</p>
                        <p>${prod.price}</p>
                        <p>${prod.price * prod.cantidad}</p>
                    </div>

                ))
            }
            {carrito.length > 0 ?
                <div className='carrito-fin'>
                    <h1>Total: ${precioTotal()}  </h1>
                    <button className='vaciar-button' onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </div> :
                <h1>El carrito está vacío</h1>
            }

        </div>
    )
}

