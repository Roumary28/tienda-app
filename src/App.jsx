import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/header'
import Productos from './Components/Productos'
import useProducto from './hooks/useProducto'
import Detalle from './Components/Detalle'

function App() {
  
  const{productos,favoritos,agregarAFavoritos,eliminarDeFavoritos} = useProducto()

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Productos productos={productos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos}/>}/>
          <Route path='/favoritos' element={<Productos productos={favoritos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos}/>}/>
          <Route path='/producto/:id' element={<Detalle/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
