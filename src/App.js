import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import Login from './Login';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
      return (
            <Router>
                <div className="container">
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
      );
  }
}

export default App;
