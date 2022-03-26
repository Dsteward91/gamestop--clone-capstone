import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router"

import '../style/reset'
import Home from './home'


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}