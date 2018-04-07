import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import authFunction from './authentication/authFunction';
import authNullFunction from './authentication/authNullFunction';



import Landing from './component/Landing/Landing';
import Profile from './component/User/Profile';
import Groups from './component/Groups/Groups';
import Group from './component/Groups/Group';
import Events from './component/Events/Events';
import Event from './component/Events/Event';
import Achievements from './component/User/Achievements';
import Diets from './component/Diets/Diets';
import Diet from './component/Diets/Diet';
import UserFoods from './component/Diets/UserFoods';
import Foods from './component/Diets/Foods';
import PhyActivities from './component/Activities/PhyActivities';
import PhyActivity from './component/Activities/PhyActivity';
import UserPhyActivities from './component/Activities/UserPhyActivities';
import Plans from './component/Activities/Plans';
import TipDiets from './component/User/TipDiets';
import TipActivities from './component/User/TipActivities';



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = "/" component={ Landing }/>
            <Route exact path = "/user/:nombre" component={ authFunction(Profile)}/>
            <Route exact path = "/groups" component = { authNullFunction(Groups) } />
            <Route exact path = "/group/:nombre" component = {authNullFunction(Group)} />
            <Route exact path = "/group/:nombre/events" component = { authNullFunction(Events)} />
            <Route exact path = "/event/:nombre" component = { authNullFunction(Event)} />
            <Route exact path = "/user/:nombre/achievements" component = { authFunction(Achievements)} />
            <Route exact path = "/user/:nombre/diets" component = { authFunction(Diets) } />
            <Route exact path = "/diet/:nombre" component = { authNullFunction(Diet)} />
            <Route exact path = "/diet/:nombre/foods" component = {authNullFunction(Foods)} />
            <Route exact path = "/user/:nombre/diet/:numerodieta/foods" component = {authFunction(UserFoods)} />
            <Route exact path = "/phyactivities" component = {authNullFunction(PhyActivities)} />
            <Route exact path = "/user/:nombre/phyactivities" component = {authFunction(UserPhyActivities)} />
            <Route exact path = "/phyactivity/:nombre" component = {authNullFunction(PhyActivity)} />
            <Route exact path = "/phyactivity/:nombre/plans" component = {authNullFunction(Plans)} />
            <Route exact path = "/user/:nombre/tipdiets" component = {authFunction(TipDiets) } />
            <Route exact path = "/user/:nombre/tipactivities" component = {authFunction(TipActivities)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
