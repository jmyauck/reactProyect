import React from 'react'
import Navbar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BannerProd} from './components/BannerProductos/BannerProductos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { categorias } from './productos-mock'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

export const App = () => {
    return (
        <BrowserRouter >
        <Navbar categorias={categorias}/>
        <BannerProd title="Del restaurant de Gusteau directo a tu casa"/>
            <Routes>
                <Route exact path='/' element= {<ItemListContainer/>}/>
                <Route exact path='/category/:id' element= {<ItemListContainer/>}/>     
                <Route exact path='/item/:id' element= {<ItemDetailContainer/>}/>     
            </Routes>
        </BrowserRouter>      
    );
    
}

export default App