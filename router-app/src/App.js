import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Route path="/products" component={Products}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/admin" component={DashBoard}/>
        <Route path="" component={Home}/>
      </div> 
    </div>
  );
}

export default App;
