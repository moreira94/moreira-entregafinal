import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-links'>
        <div className='footer-info'>
        <p>Mercedes 1389 (CABA)</p>
        <p>info@moviestack.com.ar</p>
        <p>4734-1000 / 15-6821-7792</p>


        </div>
        <div className="footer-enlaces">
        <Link to="/Nosotros">¿Quienes somos?</Link>
        <Link to="/Contacto">Ponete en contacto con nosotros</Link>


        </div>
        
      </section>
      <div className='footer-copyright'>
        <p>Copyright ® Todos los derechos reservados</p>

      </div>
    </div>
  )
}
