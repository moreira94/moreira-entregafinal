import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)


  return (
    <div>Checkout</div>
  )
}
