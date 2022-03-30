import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import PowerUp from './pages/powerUpRewards'
import Account from './pages/account'
import Cart from './pages/cart'
import tradeIns from './pages/tradeIns'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/account' component={Account} />
        <Route path='/powerUpRewards' component={PowerUp} />
        <Route path='/cart' component={Cart} />
        <Route path='/tradeIns' component={tradeIns} />
    </Switch>
)