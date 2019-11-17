import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/common/navbar';
import Movies from './components/movies';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          {/* <Movies /> */}
          <Switch>
            <Route path="/movies" component={Movies}/> 
            <Route path="/login" component={LoginForm}/> 
          </Switch>
        
        </main>
      </React.Fragment>
    );
  }
}

export default App;
