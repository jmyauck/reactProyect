import '../style.css'
import Banner from '../images/banner-food.jpg'


export  function BannerProd (props) {
    return <div  className='bannerDiv'>
        <h1 className='mainText'>{props.title}</h1>
        <img src={Banner}  className='bannerProd'></img>
    </div>
}