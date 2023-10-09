const KEY = '297cd217'

export const sPeliculas = async (busqueda) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${busqueda}`)
    const response = await res.json()
    return response.Search
}