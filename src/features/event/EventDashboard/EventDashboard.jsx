import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";

const mapState = state => {
  return {
    events: state.events
  };
};

const actions = {
  // createEvent,
  // updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  // handleFormOpen = () => {
  //   this.setState({
  //     selectedEvent: null,
  //     isOpen: true
  //   });
  // };

  // handleCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  // handleUpdateEvent = updatedEvent => {
  //   this.props.updateEvent(updatedEvent);
  //   this.setState({
  //     isOpen: false,
  //     selectedEvent: null
  //   });
  // };

  // handleOpenEvent = eventToOpen => () => {
  //   this.setState({
  //     selectedEvent: eventToOpen,
  //     isOpen: true
  //   });
  // };

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   // const updatedEvents = [...this.state.events, newEvent];
  //   this.props.createEvent(newEvent);
  //   this.setState({
  //     // events: updatedEvents,
  //     isOpen: false
  //   });
  // };

  handleDeleteEvent = eventId => () => {
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });

    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
