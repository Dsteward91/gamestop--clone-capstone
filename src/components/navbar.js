import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import '../style/navbar'
import '../style/home'






class Navbar extends Component{
    render(){
        return(
            <div className='main-home-container'>
                <div className='Navbar-Container'>
                    
                    <div className='Navbar-Top'>
                        <Link to= "/"><img src= "https://logodix.com/logo/460730.png" /> </Link>

                        <div>
                            <span className='Search-Bar'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input placeholder='Find games, consoles, tablets, and more' className='Navbar-Search-Bar'/>
                                <Link to="/product" >< button className='Navbar-Search'>SEARCH</button></Link>
                            </span>
                        </div>
                        <div className='Navbar-Links-Top-Container'>
                            <span>
                                <i className="fas fa-sync-alt" style={{color:'black'}}></i>
                                <Link className= "Order" style={{color:'black'}} to="/orderform">Order Information</Link>
                            </span>
                            <span>
                            <i className="far fa-user" style={{color:'black'}}></i>
                                <Link className= "Account" style={{color: 'black'}} to= "/account">Account</Link>
                            </span>                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>

        
        )
    }
}
export default Navbar