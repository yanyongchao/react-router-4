import React, {Component} from 'react';
export default class UserDetail extends Component {
  render() {
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find(user => user.id == this.props.match.params.id);
    console.log(typeof this.props.match.params.id);
    console.log(typeof user.id);
    return (
      <div>{user.name}</div>
    )
  }
};