export const search =  (id, data) =>{
    return data.find((film) => film.id === id)
}