import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import routes from './routes'
import '../style/reset'

function App() {
  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;