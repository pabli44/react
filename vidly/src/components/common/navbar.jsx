import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                    <Link to="/login">Login</Link>
                    </li>
                </ul>
                </div>
          </nav>
        );
    }
}
 
export default NavBar;