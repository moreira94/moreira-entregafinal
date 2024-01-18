import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../funciones"
import { Filtro } from "../filtro/Filtro"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { database } from "../../firebase/config"

export const ItemListContainer = () => {

    const [movies, setMovies] = useState([]);
    const decada = useParams().decada;

    // useEffect(() => {

    //     const productosRef = collection(database, "productos");

    //     const q = decada ? query(productosRef, where("decada", "==", decada)) : productosRef; 

    //     getDocs(q)
    //         .then((resp) => {
                
    //             setMovies(
    //                 resp.docs.map((doc) => {
    //                     return {...doc.data(), id: doc.id}
    //                 })
    //             )

    //         })
    // }, [decada])


    return (
        <div>
            <Filtro />
            <div className="list-container" >
                <ItemList movies={movies} />
            </div>
        </div>

    )
}