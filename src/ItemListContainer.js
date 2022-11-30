import './style.css'

export function Productos (props) {
    return <div className='containerProd'>
            <button className='btnProductos'>{props.title}</button> 
        </div>
}