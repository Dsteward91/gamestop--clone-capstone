import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Account from './pages/account'
import OrderForm from './form/orderform'
import Product from './pages/product'



export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/account' component={Account}/>
        <Route path='/orderform' component={OrderForm}/>
        <Route path='/product' component={Product}/>         
    </Switch>
)