import { useContext, useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../funciones"
import { Filtro } from "../filtro/Filtro"
import { useParams } from "react-router-dom"
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