import { useContext, useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../funciones"
import { Filtro } from "../filtro/Filtro"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { database } from "../../firebase/config"
import { MoviesContext } from "../../context/MoviesContext"

export const ItemListContainer = () => {

    const movies = useContext(MoviesContext)
    console.log(movies);

    const [FilteredMovies, setFilteredMovies] = useState([]);
    const decada = useParams().decada;

    useEffect( () => {
        if(decada){
            const filtro = movies.movies.filter(m => m.decada == decada);
            setFilteredMovies(filtro);
        }else {
            setFilteredMovies(movies.movies)
        }
    }, [movies, decada])

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

    useEffect( () => {
        setFilteredMovies(movies.movies)
    }, [movies])


    return (
        <div>
            <Filtro />
            <div className="list-container" >
                <ItemList movies={FilteredMovies} />
            </div>
        </div>

    )
}