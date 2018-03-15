import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './Landing';
import Profile from './Profile';
import Groups from './Groups';
import Group from './Group';
import Events from '/Events';
import Event from './Event';
import Achievements from './Achievements';
import Diets from './Diets';
import Diet from './Diet';
import UserFoods from './UserFoods';
import Foods from './Foods';
import PhyActivities from './PhyActivities';
import PhyActivity from './PhyActivity';
import UserPhyActivities from './UserPhyActivities';
import Plans from './Plans';
import TipDiets from './TipDiets';
import TipActivities from './TipActivities';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" render={ () => <Landing /> }/>
          <Route exact path ="/user/:id" render={ () => <Profile /> }/>
          <Route exact path ="/groups" render = { () => <Groups /> } />
          <Route exact path ="/group/:id" render = { () => <Group /> } />
          <Route exact path = "/group/:id/events" render = { () => <Events /> } />
          <Route exact path = "/event/:id" render = { () => <Event /> } />
          <Route exact path = "/user/:id/achievements" render = { () => <Achievements />} />
          <Route exact path = "/user/:id/diets" render = { () => <Diets /> } />
          <Route exact path = "/diet/:id" render = { () => <Diet /> } />
          <Route exact path = "/diet/:id/foods" render = {() => <Foods/>} />
          <Route exact path = "/user/:id/diet/:id/foods" render = {() => <UserFoods/>} />
          <Route exact path = "/phyactivities" render = {() => <PhyActivities/>} />
          <Route exact path = "/user/:id/phyactivities" render = {() => <UserPhyActivities/>} />
          <Route exact path = "/phyactivity/:id" render = {() => <PhyActivity/>} />
          <Route exact path = "/phyactivity/:id/plans" render = {() => <Plans/>} />
          <Route exact path = "/user/:id/tipdiets" render = {() => <TipDiets/>} />
          <Route exact path = "/user/:id/tipactivities" render = {() => <TipActivities/>} />
        </div>
      </Router>
    );
  }
}

export default App;
