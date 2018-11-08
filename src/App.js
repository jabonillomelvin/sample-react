import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import Login from './Login';
import Registration from './Registration';
import ProductViews from './ProductViews';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/products" component={ProductViews} />
                </div>
            </Router>
      );
  }
}

export default App;
