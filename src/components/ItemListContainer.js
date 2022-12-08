import { useEffect, useState } from 'react'
import '../style.css'
import {Producto, categorias} from '../productos-mock'
import { useParams } from 'react-router-dom'
import { Item } from './Item'

export function Productos () {
    const [item, setItem] = useState(Producto);
    const {id} = useParams()

    const CatFilter = new Promise((resolve,eject)=>{
        setTimeout(()=>{
            const newProductos = Producto.filter((p)=> p.category == id)
            resolve(newProductos)
        },2000)
    })

    useEffect(()=>{
        CatFilter.then((response)=>{
            setItem(response)
        })
    },)
    return (
        <div className='containerListProducts'>
            {
                item.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}