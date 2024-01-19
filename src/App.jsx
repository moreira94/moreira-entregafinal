import "./App.css"
import './styles/style.scss'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto } from "./components/contacto/Contacto.jsx"
import { Nosotros } from "./components/nosotros/Nosotros.jsx"
import { Index } from "./components/index/Index.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { useState } from "react"
import CartProvider, { CartContext } from "./context/CartContext.jsx"
import { Carrito } from "./components/carrito/Carrito.jsx"
import { Checkout } from "./components/checkout/Checkout.jsx"
import MoviesProvider from "./context/MoviesContext.jsx"

function App() {



 


  return (
    <div>
      <MoviesProvider>

      <CartProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path="/Index" element={<Index />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/movies/:decada" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />





          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
      </MoviesProvider>
    </div>
  )
}

export default App

