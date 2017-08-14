import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/home">首页</Link>
        <Link to="/user">用户管理</Link>
        <Link to="/profile">个人设置</Link>
      </div>
    )
  }
};