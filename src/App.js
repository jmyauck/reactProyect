import React from 'react'
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Productos } from './components/ItemListContainer'
import { BannerProd } from './components/BannerProductos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { categorias } from './productos-mock'

export const App = () => {
    
    return (
        <BrowserRouter >
        <Navbar categorias={categorias}/>
        <BannerProd title="Del restaurant de Gusteau directo a tu casa"/>
            <Routes>
                <Route exact path='/' element= {<Productos/>}/>
                <Route exact path='/category/:id' element= {<Productos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App