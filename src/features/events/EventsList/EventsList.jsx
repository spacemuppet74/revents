import React, { Component } from "react";

import EventsListItem from "./EventsListItem";

class EventsList extends Component {
  state = {};
  render() {
    const { events, onEventEdit, deleteEvent } = this.props;
    return (
      <div>
        <h1>Events List</h1>
        {events.map(event => {
          return (
            <EventsListItem
              event={event}
              key={event.id}
              onEventEdit={onEventEdit}
              deleteEvent={deleteEvent}
            />
          );
        })}
      </div>
    );
  }
}

export default EventsList;
