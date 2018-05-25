import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
>>>>>>> 9c48282a432cf718555711c11c267dfa1f4eba63
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";

import TestArea from "../../features/testarea/TestArea";

import EventDashboard from "../../features/events/EventsDashboard/EventsDashboard";
import EventDetailedPage from '../../features/events/EventDetails/EventDetailspage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventForm from '../../features/events/EventForm/EventForm'
import HomePage from '../../features/home/HomePage'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
<<<<<<< HEAD
        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
=======
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                  <Route path="/test" component={TestArea} />
                </Switch>
              </Container>
            </div>
          )}
        />
>>>>>>> 9c48282a432cf718555711c11c267dfa1f4eba63
      </Fragment>
    );
  }
}

export default App;
