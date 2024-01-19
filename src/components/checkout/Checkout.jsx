import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form';
import { database } from '../../firebase/config';



export const Checkout = () => {

  const [pedidoId, setPedidoId] = useState("");


  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
    }
    console.log(pedido);

    const pedidosRef = collection(database, "pedidos");

    addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })

}


  return (
    <div className='checkout-body'>
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>

        <input type="text" placeholder="Ingresá tu Nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu Mail" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu Teléfono" {...register("telefono")} />

        <button className="enviar" type="submit">Comprar</button>
        </form>

    </div>
  )
}
