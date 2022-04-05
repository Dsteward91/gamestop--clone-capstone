import React, { Component} from 'react'
import Carousel, { CarouselItem } from './carousel';
import Navbar from './navbar'
import ProductAdd from './pages/productform'

import '../style/home'


class Home extends Component{
    render(){
        return(
            <div className='main-home-container'>
                <Navbar />
                
                <Carousel>
                    <CarouselItem><img src='https://i02.hsncdn.com/is/image/HomeShoppingNetwork/prodzoom/legend-of-zelda-breath-of-the-wild-nintendo-switch-d-20201221152633157~9840474w.jpg' alt='first Slide'/></CarouselItem>
                    <CarouselItem><img src='https://i.imgur.com/eWrlHAV.jpeg' alt='second Slide'></img></CarouselItem>
                    <CarouselItem><img src='https://i5.walmartimages.com/asr/099d2db4-bda8-4f62-85a2-2abe561fd670.d88b55981ba8e75039ba1408ff2df628.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' alt='third Slide' ></img></CarouselItem>
                </Carousel>
                <ProductAdd/>              
                
            </div>
                
        )
    }
}
export default Home