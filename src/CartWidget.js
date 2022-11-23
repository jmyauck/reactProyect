import CartWidget from './images/shopping-cart.png'
import './style.css'


export function CartImg() {
    return <div>
            <h1>3<img src={CartWidget}  className='cartImg'/></h1>
        </div>
}

