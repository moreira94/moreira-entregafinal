import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { getProductById } from '../../funciones'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { database } from '../../firebase/config'
import { MoviesContext } from '../../context/MoviesContext'

export const ItemDetailContainer = () => {

    const [item, setItem ] = useState(null)
    const id= useParams().id;
    const movies = useContext(MoviesContext);

    useEffect(() => {
      const itemFiltrado = movies.movies.filter(m => m.id == id)
      setItem(itemFiltrado[0])
    }, [id])

  return (   
    <div className='itemDetailContainer'>
        {item && <ItemDetail item={item} />}

    </div>
  )
}
