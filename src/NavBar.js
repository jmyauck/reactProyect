import './style.css'
import { CartImg } from './CartWidget'

function Navbar() {
    return  <header className='headerStyle'>
            <nav className='navBar'>
                <ul>
                    <li><button className='btnStyle'>Home</button></li>
                    <li><button className='btnStyle'>Galery</button></li>
                    <li><button className='btnStyle'>About us</button></li>
                    <li><button className='btnStyle'>Contact</button></li>
                </ul>
            </nav>
            <div>
                <CartImg/>
            </div>
    </header>
}

export default Navbar