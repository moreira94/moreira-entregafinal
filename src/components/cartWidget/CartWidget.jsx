import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { BsCart4 } from "react-icons/bs";



export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div>
            <Link className="carrito-link " to="/carrito" >
            <div className="cart-counter">
                <BsCart4 className="cart" />
                <span className='numerito'>{cantidadEnCarrito()}</span>
            </div>
            </Link>
        </div>
    )
}