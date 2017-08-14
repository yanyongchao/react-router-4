import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
export default class MenuLink extends Component {
  render() {
    return (
      <Route path={this.props.to} children={(match) => {
        return <Link to={this.props.to}>{this.props.label}</Link>
      }}/>
    )
  }
};