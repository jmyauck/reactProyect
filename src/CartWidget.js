import CartWidget from './images/shopping-cart.png'
import './style.css'


export function CartImg() {
    return <div>
            <button className='btnStyle'><h2>3</h2><img src={CartWidget}  className='cartImg'/></button>
        </div>
}

