import React, {Component} from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import {Route, Link} from 'react-router-dom';
export default class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/user/list">用户列表</Link>
          </li>
          <li>
            <Link to="/user/add">新增用户</Link>
          </li>
        </ul>
        <div>
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" component={UserAdd}/>
          <Route path="/user/detail/:id" component={UserDetail}/>
        </div>
      </div>
    )
  }
};