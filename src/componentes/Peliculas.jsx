function ListaPeliculas({peliculas}) {
    return (
        <ul className='grilla'>
              {
                peliculas.map(pelicula => (
                  <li key={pelicula.imdbID} className='pelicula'>
                    <h3>{pelicula.Title}</h3>
                    <p>{pelicula.Year}</p>                    
                    <img src={pelicula.Poster} alt={pelicula.Title} />
                  </li>
                ))
              }
            </ul>
    )
}

function NoHayPeliculas() {
  return(
    <p>No se encontraron películas</p>
  )
}

export function Peliculas({ peliculas }) {
  const hayPeliculas = peliculas?.length > 0 
  return(
    hayPeliculas? 
    <ListaPeliculas peliculas={peliculas} />
    :
    <NoHayPeliculas />
  )
}
