import React, { Component } from "react";

import EventsListItem from "./EventsListItem";

class EventsList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Events List</h1>
        <EventsListItem />
        <EventsListItem />
        <EventsListItem />
      </div>
    );
  }
}

export default EventsList;
