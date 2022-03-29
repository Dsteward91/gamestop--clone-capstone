import React, {Component} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import '../style/navbar'


class Navbar extends Component{
    render(){
        return(
            <div className='Navbar-Container'>
                
                <div className='black-bar'>

                    <span>
                    <i className="fas fa-map-marker-alt" style={{color:'white'}}></i>
                    <h1>Location Services Coming Soon</h1>
                    </span>

                    <span>
                    <i className="fas fa-clipboard-list" style={{color:'white'}}></i>
                    <h1>Check an Order</h1>
                    </span>

                    <span>
                    <i className="far fa-question-circle" style={{color:'white'}}></i>
                    <h1>Help</h1>
                    </span>

                    <div className='black-filler'/>
                </div>
                <div className='Navbar-Top'>
                    <img src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dwb103fa93/images/svg-icons/logo-1280.svg"/>
                        <div>
                        <span className='Search-Bar'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                         <input placeholder='Find games, consoles, tablets, and more' className='Header-Search-Bar'/>
                         <button className='Navbar-Search'>SEARCH</button>
                         </span>
                        </div>
                    <div className='Navbar-Links-Top-Container'>
                        <span>
                        <i className="fas fa-sync-alt" style={{color:'red'}}></i>
                        <h6>Trade-Ins</h6>
                        </span>

                        <span>
                        <i className="fas fa-power-off" style={{color:'red'}}></i>
                        <h6>PowerUp Rewards</h6>
                        </span>

                        <span>
                        <i className="far fa-user" style={{color:'red'}}></i>
                        <h6>Account</h6>
                        </span>

                        <span id="Last-Link">
                        <i className="fas fa-shopping-cart" style={{color:'red'}}></i>
                        <h6>Cart</h6>
                        </span>
                    </div>
                    
                </div>

                <div className='Navbar-Bottom-Wrapper'>
                    <div className='Navbar-Bottom'>
                        <div>
                        <h1>VIDEO GAMES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>ACCESSORIES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>TOYS & COLLECTIBLES</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>ELECTRONICS</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>CLOTHING</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>DEALS</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>WEEKLY AD</h1>
                        </div>

                        <span></span>

                        <div>
                        <h1>GIFT CARDS</h1>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        
        )
    }
}
export default Navbar