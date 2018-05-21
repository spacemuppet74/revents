import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import EventsList from "../EventsList/EventsList";

class EventDashboard extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventsList />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Right Hand</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
