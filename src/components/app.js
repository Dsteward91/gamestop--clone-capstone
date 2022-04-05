import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Product from './pages/product'
import routes from './routes'
import '../style/reset'
import '../style/base'




export default function App() {
  return (
      <div className="App">
        <Router>
          {routes}        
        </Router>
        
      </div>
  );
}


