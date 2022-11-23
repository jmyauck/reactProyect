import './style.css'

function Navbar() {
    return  <nav className='navBar'>
        <ul>
            <li><button className='btnStyle'>Home</button></li>
            <li><button className='btnStyle'>Galery</button></li>
            <li><button className='btnStyle'>About us</button></li>
            <li><button className='btnStyle'>Contact</button></li>
        </ul>
    </nav>
}

export default Navbar