import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form';
import { database } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';



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

if (pedidoId) {
  return (
    <div className='checkout-bg'>
      <h1>Gracias por su compra</h1>
      <br />
      <h3>Su numero de pedido es: {pedidoId}</h3>
    </div>
  )

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
