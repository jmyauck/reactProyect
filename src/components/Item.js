import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return (
        <div>
            <div className='productosStyle'>
                <Link to="/item/producto.id"><img src={producto.img} width={300} height={200}/>
                <h2>{producto.name}</h2></Link>
            </div>
        </div>
    )
}
