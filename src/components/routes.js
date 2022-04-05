import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Account from './pages/account'



export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/account' component={Account}/>        
    </Switch>
)