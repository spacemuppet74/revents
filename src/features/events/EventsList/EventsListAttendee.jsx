import React, { Component } from "react";
import { List, Image, ImageGroup } from "semantic-ui-react";

class EventsListAttendee extends Component {
  state = {};
  render() {
    return (
      <List.Item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/portraits/women/42.jpg"
        />
      </List.Item>
    );
  }
}

export default EventsListAttendee;
