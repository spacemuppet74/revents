import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const updatedEvent = { ...this.state.event };

    if (this.state.event.id) {
      this.props.updatedEvent(updatedEvent);
    } else {
      this.props.formSubmit(updatedEvent);
    }
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({ event: this.props.selectedEvent });
    }
  }

  componentWillUnmount() {
    this.setState(() => ({ event: { ...emptyEvent } }));
    console.log("unmounting ", this.state.event);
    console.log("empty event ", emptyEvent);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("next props ", nextProps);
    console.log("previous state ", prevState);

    if (
      nextProps.selectedEvent === null ||
      nextProps.selectedEvent.id !== prevState.event.id
    ) {
      return {
        event: nextProps.selectedEvent || { ...emptyEvent }
      };
    } else {
      return null;
    }
  }
  render() {
    const { cancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="Event Title"
              name="title"
              value={event.title}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              name="date"
              value={event.date}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              name="city"
              value={event.city}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              name="venue"
              value={event.venue}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              name="hostedBy"
              value={event.hostedBy}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
