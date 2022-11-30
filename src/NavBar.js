import './style.css'
import { CartImg } from './CartWidget'
import {Logo, Logotipo} from './Logo'

function Navbar() {
    return (
    <header className="headerStyle">
        <Logotipo />
        <nav class="navbar navbar-expand-lg bg-light">

        <div class="container-fluid">

            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item btnStyle">
                <a class="nav-link" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li class="nav-item btnStyle">
                <a class="nav-link" href="#">
                    Find us
                </a>
                </li>
                <li class="nav-item dropdown btnStyle">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Menu
                </a>
                <ul class="dropdown-menu btnStyle">
                    <li>
                    <a class="dropdown-item" href="#">
                        Sandwich
                    </a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">
                        Pizza
                    </a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">
                        Picada
                    </a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">
                        Bebidas
                    </a>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        <div className='cartBtn'>
            <CartImg />           
        </div>
        </nav>

      </header>
    );
}

export default Navbar