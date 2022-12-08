import CartWidget from '../images/food-cover.png'
import '../style.css'


export function CartImg() {
    return (<div>
            <button className='btnStyle' onClick={()=>{alert ("Tu plato esta vacio, sirvete lo que gustes!")}}><img src={CartWidget}  className='cartImg'/></button>
        </div>
        )
}

