import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import './App.css';
import Login from './components/linkedlogin';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Filipip</h1>
            </header>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
    );
  }
}

export default App;
