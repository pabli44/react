import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import Posts from './components/admin/posts';
import DashBoard from './components/admin/dashBoard';
import Home from './components/home';
import ProductDetail from './components/product-detail';
import NavBar from './components/common/navBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetail}/>
          <Route path="/products" render={props => <Products sortBy="newest" {...props} />} />
          <Route path="/posts/:year?/:month?" component={Posts}/>
          <Redirect from="/messages" to="/posts"/>
          <Route path="/admin" component={DashBoard}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/not-found"/>
        </Switch>
      </div> 
    </div>
  );
}

export default App;
