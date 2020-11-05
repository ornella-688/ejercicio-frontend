import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dummy from '../dummy/dummy';
import Opening from '../opening/opening';
import './navigation.css';

 
class Navigation extends React.Component {

  render() {

    return (
      <div className="navigation">
            <ul className="sections">
                  <li><a href='/' className="active">Home</a></li>
                  <li><a href='/dummy'>Dummy</a></li>
                  <li><a href="/opening">Apertura</a></li>
            </ul>
      </div>
    );
  }
}
 
export default Navigation;