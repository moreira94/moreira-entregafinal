import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export const ItemCount = ({total, inicial, item}) => {


    const [cantidad, setCantidad] = useState(inicial)

    const {carrito, setCarrito} = useContext(CartContext);


    const aumentar = () => {
        if (cantidad < total ) {
            setCantidad(cantidad+1)
        }
    }

    const reducir =() => {
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    const agregarAlCarrito = () => {
        const itemAgregado = {...item, cantidad};
        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id )
        if(estaEnCarrito) {
            estaEnCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito)
    }


  return (
    <div className='contador'>
        <div className='controles'>
            <button className='button' onClick={reducir}>-</button>
            <h4 className='number'>{cantidad}</h4>
            <button className='button' onClick={aumentar}>+</button>
        </div>
        <div className='add-cart'>
            <button className=' cart-button' onClick={agregarAlCarrito} disabled={!total} >
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
