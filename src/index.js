import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './NavBar'
import { CartImg } from './CartWidget'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar/>
        <CartImg/>
    </>
)