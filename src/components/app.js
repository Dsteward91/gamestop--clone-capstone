import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import '../style/reset'


export default function App() {
  return (
      <div className="App">
        <Router>
          {routes}        
        </Router>
      </div>
  );
}


