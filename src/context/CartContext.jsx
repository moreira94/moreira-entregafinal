import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito") || []);


const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial)
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc,prod) => acc + prod.cantidad, 0)  
  }
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([]);
    }

    const removeFromCart = (index) => {
      setCarrito((prevCarrito) => {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito.splice(index, 1);
        return nuevoCarrito;
      });
    };

    const contextValue = {
        carrito,
        setCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
        removeFromCart
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


