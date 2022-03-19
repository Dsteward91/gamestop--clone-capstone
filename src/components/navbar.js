import React from 'react'



import '../style/navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            < Navbar />
            <div className='shop-dropdown'>

            </div>
            <img className='navbar_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/GameStop.svg">
            </img>

            <div className='navbar_search'>
                <input className='navbar_search_input' type="text" />
                {/* LOGO */}
            </div>

            <div className='navbar_header'>
                <div className='tradein_option'>
                    <span
                        className='game_tradein'>Trade-Ins</span>
                </div>

                <div className='powerup_option'>
                    <span
                        className='powerup'>PowerUp Rewards</span>
                </div>

                <div className='signin_option'>
                    <span
                        className='account login'>Sign In</span>
                </div>


            </div>

        </div>
    )
}

export default Navbar
