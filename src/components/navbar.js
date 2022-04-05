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
                
                <div className='Navbar-Top'>
                    <Link to= "/"><img src= "https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-as-complement-to-design-fire-game-logo-icon-design-125971709.jpg" /> </Link>

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
                            <Link to="/tradeins">Trade-Ins</Link>
                        </span>


                        <span>
                        <i className="far fa-user" style={{color:'red'}}></i>
                            <Link to= "/account">Account</Link>
                        </span>

                        
                    </div>
                    
                </div>
                
            </div>

        
        )
    }
}
export default Navbar