import { useCallback, useState } from 'react'
import './App.css'
import { Peliculas } from './componentes/Peliculas'
import { usePeliculas } from './hooks/usePeliculas'
import debounce from 'just-debounce-it'


function App() {
  const [busqueda, setBusqueda] = useState('')
  const [ordenar, setOrdenar] =  useState(false)
  const { peliculas, obtenerPeliculas } = usePeliculas({ busqueda, ordenar })
  
  const debouncedObtenerPeliculas = useCallback(
    debounce(busqueda => {
      obtenerPeliculas({ busqueda })
    }, 300)
    , [obtenerPeliculas]
  )

  function manejarClick(event) {
    event.preventDefault()
    const { busqueda } = Object.fromEntries(new window.FormData(event.target))
    obtenerPeliculas({ busqueda })
  }

  function manejarCambioInput(event) {
    const busqueda = event.target.value
    debouncedObtenerPeliculas( busqueda )
  }

  function manejarOrdenar(){
    setOrdenar(!ordenar)
  }

  return (
    <div className='container'>
      <header>
        <h1>Buscador películas</h1>
        <form action="" className='form' onSubmit={manejarClick}>
          <input name='busqueda' type="text" onChange={manejarCambioInput} placeholder='Avengers, The lord of the rings...' />
          <input type="checkbox" name="ordenar" id="" onChange={manejarOrdenar} checked={ordenar}/>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Peliculas peliculas={peliculas} />
      </main>
    </div>
  )
}

export default App
