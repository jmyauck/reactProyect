import CartWidget from './food-cover.png'
import './cartwidget.css'


export function CartImg() {
    return (<div>
            <button className='btnStyle' onClick={()=>{alert ("Tu plato esta vacio, sirvete lo que gustes!")}}><img src={CartWidget}  className='cartImg'/></button>
        </div>
        )
}

