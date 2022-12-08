import Logo from '../images/ratatoui.jpg'
import '../style.css'
import { Link } from 'react-router-dom'

export function Logotipo () {
    return <a href="/"><div className='logo'>
        <img src= { Logo } alt="#"></img>
        <div>
        <h3>Ratatouille</h3>
        <h6>Gourmet fast food</h6>
        </div>
    </div></a>
        
}