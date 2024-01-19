import { useEffect, useState } from "react";
import { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/config"

export const MoviesContext = createContext();

const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    
    useEffect( () => {
        const fetchData = async () => {
           const data = await getDocs(collection(database, "productos"));
           setMovies(
            data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })
        )
           return data;
        }
        fetchData();
    },[])

    const contextValue = {
        movies
    }

    return (
        <MoviesContext.Provider value={contextValue}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider


