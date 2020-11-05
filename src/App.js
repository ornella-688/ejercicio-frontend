import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dummy from './components/dummy/dummy';
import Opening from './components/opening/opening';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navigation">
        <ul>
          <li><Link to="/dummy">Dummy</Link></li>
          <li><Link to="/opening">Opening</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/dummy">
          <Dummy />
        </Route>
        <Route path="/opening">
          <Opening />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



