import React, {Component} from 'react';
import Home from '../container/Home';
import User from '../container/User';
import Profile from '../container/Profile'
import Nav from '../container/nav';
import Login from '../container/Login';
import ProtectRoute from '../container/Profile/ProtectRoute';
import NotFound from '../container/NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// 路由的两种类型
export default class RouterMap extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch> {/*职匹配一次*/}
            <Route exact path="/home" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/login" component={Login}/>
            <ProtectRoute path="/profile" component={Profile}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
};