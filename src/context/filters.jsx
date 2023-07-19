import { createContext, useState } from "react";
//para el context.. necesito crear contexto, proveer el contexto y consumirlo

//1. Creo el contexto. Este es el que tengo q consumir
export const FilterContext = createContext()

//2. Creo el provider para proveer el contexto a los componentes. Este me provee los datos
export function FiltersProvider ({ children }){
    //envuelve al children, o sea todo lo q vaya adentro
   const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
   })
   
    return(
        <FilterContext.Provider value={{
            //3. Aca defino el estado inicial, info a la que va a querer acceder. No tiene xq ser un estado
            filters, //estado inicial
            setFilters
        }}>
            { children }</FilterContext.Provider>
    )
}
//Necesito ENVOLVER toda la aplicacion para que pueda funcionar esto en cualquier lugar de la pagina. Lo voy a hacer desde el archivo Main.jsx
