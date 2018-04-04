import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
import LogIn from './component/Landing/LogIn';

class App extends Component {
   
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" render={ () => <Landing /> }/>
          <Route exact path ="/user/:id" render={ (id) => <Profile id ={id.match} /> }/>
          <Route exact path ="/groups" render = { () => <Groups /> } />
          <Route exact path ="/group/:id" render = { (id) => <Group id={id.match}/> } />
          <Route exact path = "/group/:id/events" render = { (id) => <Events id={id.match}/> } />
          <Route exact path = "/event/:id" render = { (id) => <Event id={id.match}/> } />
          <Route exact path = "/user/:id/achievements" render = { (id) => <Achievements id={id.match}/>} />
          <Route exact path = "/user/:id/diets" render = { (id) => <Diets id={id.match}/> } />
          <Route exact path = "/diet/:id" render = { (id) => <Diet id={id.match}/> } />
          <Route exact path = "/diet/:id/foods" render = {(id) => <Foods id={id.match} />} />
          <Route exact path = "/user/:id/diet/:dieta/foods" render = {(id, dieta) => <UserFoods id={id.match} dieta={dieta.match}/>} />
          <Route exact path = "/phyactivities" render = {() => <PhyActivities/>} />
          <Route exact path = "/user/:id/phyactivities" render = {(id) => <UserPhyActivities id={id.match}/>} />
          <Route exact path = "/phyactivity/:id" render = {(id) => <PhyActivity id={id.match}/>} />
          <Route exact path = "/phyactivity/:id/plans" render = {(id) => <Plans id={id.match}/>} />
          <Route exact path = "/user/:id/tipdiets" render = {(id) => <TipDiets id={id.match}/>} />
          <Route exact path = "/user/:id/tipactivities" render = {(id) => <TipActivities id={id.match}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
