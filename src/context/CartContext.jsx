import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc,prod) => acc + prod.cantidad, 0)  
  }
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([]);
    }

    const contextValue = {
        carrito,
        setCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


