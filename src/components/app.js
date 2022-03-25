import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import '../style/reset'
import Home from './home'

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {routes}
      </div>
    </Router>
  );
}

export default App;