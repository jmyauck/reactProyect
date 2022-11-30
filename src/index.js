import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Productos } from './ItemListContainer'
import { BannerProd } from './BannerProductos'

import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar/>
        <BannerProd/>
        <Productos title="Sandwiches"/>
        <Productos title="Pizzas"/>
        <Productos title="Picadas"/>        
        <Productos title="Bebidas"/>
    </>
)