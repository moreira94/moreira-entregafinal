import React, { useState } from 'react'

export const Contacto = () => {



  const [value, setValue] = useState ({nombre:"", email: "", mensaje:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado", {value});
    handleReset();
  }

  const handleReset = () => {
    setValue({nombre:"", email: "", mensaje:"" })
  }

  const handleValores = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }


  return (
    <div className='contacto-container'>
      <h1>¡Contactate con nosotros!</h1>

      <div className='form-container' >

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className='mail-y-nombre'>
            <div className='nombre'>
              <label>Nombre:</label>
              <input type="text" placeholder="Introduzca su nombre" value={value.nombre} onChange={handleValores} name="nombre" />
            </div>
            <div className='mail'>
              <label>Email:</label>
              <input type="email" placeholder="Introduzca su email" value={value.email} onChange={handleValores} name="email" />
            </div>
          </div>
          <div className='mensaje-y-check'>
          <div className='mensaje'>
            <label>Mensaje:</label>
            <textarea className='input-mensaje' type="text" placeholder="Mensaje" value={value.mensaje} onChange={handleValores} name="mensaje" />
          </div>
          <div>
            <label>
              Desea recibir notificaciones por mail?: <input className='check' type="checkbox" name="myCheckbox" defaultChecked={true} />
            </label>
            
          </div>
          <div className='botones'>
          <button type='submit'>Enviar</button>
          <button type='reset'> Limpiar</button>
          </div>
          </div>
        </form>

      </div>


    </div>
  )
}
