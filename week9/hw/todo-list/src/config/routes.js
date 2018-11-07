import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodoContainer from '../containers/TodoContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodoContainer }/>
  </Switch>
)