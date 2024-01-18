import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { getProductById } from '../../funciones'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { database } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [item, setItem ] = useState(null)
    const id= useParams().id;

    // useEffect(() => {

    //     const docRef = doc(database, "productos", id);
    //     getDoc(docRef)
    //     .then((resp) =>{
    //         setItem(
    //             {...resp.data(), id : resp.id}
    //         )
    //     })
    // }, [id])

  return (   
    <div className='itemDetailContainer'>
        {item && <ItemDetail item={item} />}

    </div>
  )
}
