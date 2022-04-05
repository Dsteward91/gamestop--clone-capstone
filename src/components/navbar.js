import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to= "/"><img src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dwb103fa93/images/svg-icons/logo-1280.svg"/></Link>
                    <div>
                        <span className='Search-Bar'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input placeholder='Find games, consoles, tablets, and more' className='Header-Search-Bar'/>
                        <Link to="/product" >< button className='Navbar-Search'>SEARCH</button></Link>
                        </span>
                    </div>
                    <div className='Navbar-Links-Top-Container'>
                        <span>
                        <i className="fas fa-sync-alt" style={{color:'red'}}></i>
                            <h4>Trade-Ins</h4>
                        </span>

                        <span>
                        <i className="fas fa-power-off" style={{color:'red'}}></i>
                            <h4>PowerUp Rewards</h4>
                        </span>

                        <span>
                        <i className="far fa-user" style={{color:'red'}}></i>
                            <Link to= "/account">Account</Link>
                        </span>

                        <span id="Last-Link">
                        <i className="fas fa-shopping-cart" style={{color:'red'}}></i>
                            <h4>Cart</h4>
                        </span>
                    </div>
                    
                </div>
                
            </div>

        
        )
    }
}
export default Navbar