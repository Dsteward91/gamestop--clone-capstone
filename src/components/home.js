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
                    
            
                    <span className='spacer'></span>
                </div>
                
            </div>
        )
    }
}
export default Home