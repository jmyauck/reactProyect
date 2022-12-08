import '../style.css'
import { CartImg } from './CartWidget'
import { Logotipo} from '../components/Logo'
import {categorias} from '../productos-mock'
import { Link } from 'react-router-dom';

function Navbar({categorias}) {
    return (
    <header className="headerStyle">
        <Logotipo />
        <nav className="navbar navbar-expand-lg bg-light">

        <div className="container-fluid">
            {
                categorias.map((categoria)=>{
                    return <Link to={`category/${categoria.id}`} className='btnStyle'>{categoria.name}</Link>
                })
            }
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item btnStyle">
                <a className="nav-link" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item btnStyle">
                <a className="nav-link" href="#">
                    Find us
                </a>
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