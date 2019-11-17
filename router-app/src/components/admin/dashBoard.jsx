import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import SideBar from './sidebar';
import Users from './users';
import Posts from './posts';

class DashBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2><b><p>Admin Dashboard</p></b></h2>
                <SideBar />
                <Route path="/admin/users" component={Users}/>
                <Route path="/admin/posts" component={Posts}/>
            </div>
         );
    }
}
 
export default DashBoard;