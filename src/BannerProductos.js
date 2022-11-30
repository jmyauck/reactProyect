import './style.css'
import Banner from './images/banner-food.jpg'


export function BannerProd () {
    return <div>
        <img src={Banner}  className='bannerProd'></img>
    </div>
}