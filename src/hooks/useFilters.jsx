import { useContext } from "react"
import { FilterContext } from "../context/filters"


export function useFilters(){
    //CREO LO QUE VOY A CONSUMIR CON EL CONTEXT
    const {filters, setFilters} = useContext(FilterContext)
    
    
     //esto es para JUNIORS Y SABER SI O SI
     const filterProducts = (products) =>{
      return products.filter(product =>{
        return(
          product.price >= filters.minPrice &&
          (
            filters.category == 'all' ||
            product.category == filters.category
          )
        )
      })
     }
     return { filters, filterProducts, setFilters }
    }