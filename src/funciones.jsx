import React from 'react'
import movies from "../movies.json"


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(movies)
        }, 100);
    })

}

// export const getProductById = (moviesId) => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve (movies.find(movies => movies.id === moviesId))
//         }, 100)
//     })
// }

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = movies.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}

