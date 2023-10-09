import { useRef, useState, useCallback, useMemo } from "react"
import { sPeliculas } from "../servicios/sPeliculas"

export function usePeliculas({ busqueda, ordenar }) {
    const [peliculas, setPeliculas] = useState()
    const busquedaAnterior = useRef(busqueda)

    // me fijo si la pelicula que se esta buscando es igual a la pelicula
    // que se buscó anteriormente


     const obtenerPeliculas = ({busqueda}) => {
         if (busqueda == busquedaAnterior.current) return
         sPeliculas(busqueda).then(nuevaBusqueda => setPeliculas(nuevaBusqueda))
         busquedaAnterior.current = busqueda
     }

     /* const obtenerPeliculas = useCallback(async ({ busqueda }) => {
        if (busqueda === busquedaAnterior.current) return
        // search es ''
    
        try {
          busquedaAnterior.current = busqueda
          const newMovies = await sPeliculas(busqueda)
          setPeliculas(newMovies)
        } catch (e) {
          console.log(e.message)
        } 
      }, []) */

    const sortedMovies = useMemo(() => {
        if(!peliculas) return
        return ordenar
          ? [...peliculas].sort((a, b) => a.Title.localeCompare(b.Title))
          : peliculas
      }, [ordenar, peliculas])

    return { peliculas: sortedMovies, obtenerPeliculas }
}