import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './Landing';
import Profile from './Profile';
import Groups from './Groups';
import Group from './Group';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={Landing}/>
          <Route exact path ="/user/:id" component={Profile}/>
          <Route exact path ="/groups" component = {Groups} />
          <Route exact path ="/group/:id" component = {Group} />
        </div>
      </Router>
    );
  }
}

export default App;
