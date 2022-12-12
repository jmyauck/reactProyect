import { useEffect, useState } from 'react'
import {Producto} from '../../productos-mock'
import { useParams } from 'react-router-dom'
import { Item } from '../Item/Item'
import './itemlist.css'

export const ItemList =()=> {
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
    },[id])
    return (
        <div className='containerListProducts'>
            {
                item && item.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}

