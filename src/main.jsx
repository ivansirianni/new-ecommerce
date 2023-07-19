import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx' // primero importo esto
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider> 
    <App />
  </FiltersProvider>,
)//aca envuelvo la app d esta forma, con FiltersProvider
