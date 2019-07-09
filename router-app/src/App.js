import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import Posts from './components/posts';
import DashBoard from './components/dashBoard';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/admin" component={DashBoard}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div> 
    </div>
  );
}

export default App;
