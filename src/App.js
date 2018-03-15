import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './component/Landing/Landing';
import Profile from './component/Profile/Profile';
import Groups from './component/Groups/Groups';
import Group from './component/Groups/Group';


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
