import {Redirect, Route} from 'react-router-dom';
import React from 'react';

export default function ({component: Component, ...rest}) {
  return <Route {...rest} render={(props) => localStorage.getItem('login') ? <Component/> : <Redirect to={
    {
      pathname: '/login',
      state: {from: props.location.pathname}
    }
  }/>}/>
}