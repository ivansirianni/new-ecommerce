import { store as initialProducts} from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/header'
import { useState } from 'react'
import { Footer } from './components/footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/cart'
import { CartProvider } from './context/cart'


function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  
  return (
    <>
    <CartProvider>
      <Header />
      <Cart />
      <Products store={filteredProducts} />
      <Footer filters={filters} />
    </CartProvider>  
    </>
   
  )
}

export default App
