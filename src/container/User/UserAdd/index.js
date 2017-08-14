import React, {Component} from 'react';
export default class UserAdd extends Component {
  handleSubmit = () => {
    let name = this.name.value;
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    users.push({id: Date.now(), name});
    localStorage.setItem('users', JSON.stringify(users));
    this.props.history.push('/user/list');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" className="form-control" ref={ref => this.name = ref}/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
};