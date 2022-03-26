import React, { Component} from 'react'
import Navbar from './navbar'

import '../style/home'


class Home extends Component{
    render(){
        return(
            <div className='main-home-container'>
                <Navbar />
                <div className="Overall-Container">
                    <span className='spacer'></span>
                <div id="MyCarousel" class="carousel slide" data-ride="carousel">
                    <ol class='carousel-indicators'>
                        <li data-target='#MyCarousel' data-slide-to='0' class='active'></li>
                        <li data-target='#MyCarousel' data-slide-to='1'></li>
                        <li data-target='#MyCarousel' data-slide-to='2'></li>
                        
                    </ol>
                    <div class="carousel-inner">
                        
                        <div class='carousel-item active'>
                            <img class='d-block w-100' src='https://media.playstation.com/is/image/SCEA/tom-clancys-ghost-recon-breakpoint-hero-banner-01-ps4-us-03may19?$native_nt$' alt='First Slide'/>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://i.imgur.com/eWrlHAV.jpeg' alt='Second Slide'/>
                        </div>
                        <div class='carousel-item'>
                            <img class='d-block w-100' src='https://i02.hsncdn.com/is/image/HomeShoppingNetwork/prodzoom/legend-of-zelda-breath-of-the-wild-nintendo-switch-d-20201221152633157~9840474w.jpg' alt='Third Slide'/>
                        </div>
                        <a className='carousel-control-prev' href='carousel_controls' rol="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>         
                        </a>
                        <a className='carousel-control-next' href='carousel_controls' rol="button" data-slide="next">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>         
                        </a>
                        
                    </div>
                </div>
                    <span className='spacer'></span>
                </div>
                
            </div>
        )
    }
}
export default Home