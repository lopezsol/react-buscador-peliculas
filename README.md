# Buscador películas  
Aplicación web para buscar películas en base a su título. Permite ordenar alfabéticamente. Se realizó el ejercicio para practicar useState, Custom Hooks, useCallback y useMemo.  

## URL  


## API a usar:  
https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.  

## Requerimientos:  
- Necesita mostrar un input para buscar la película y un botón para buscar.  
- Lista las películas y muestra el título, año y poster.  
- Que el formulario funcione.  
- Haz que las películas se muestren en un grid responsive.  
- Hacer el fetching de datos a la API

## Primera iteración:  
- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Agregar checkbox para ordenar alfabéticamente las películas.
- Evita que se haga la búsqueda continuamente al escribir (debounce)

Para el debounce se utilizó la librería just de angus-c https://github.com/angus-c/just  
Para los estilos genéricos se utilizó Water.css https://watercss.kognise.dev/    
Para compilar se utilizó la herramiente Vite https://es.vitejs.dev/  
## Inicializar  
- npm install
- npm run dev