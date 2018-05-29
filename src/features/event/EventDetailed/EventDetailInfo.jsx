import React, { Component } from "react";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";

import EventDetailMap from "./EventDetailedMap/EventDetailMap";

class EventDetailInfo extends Component {
  state = {
    showMap: false
  };

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }));
  };
  render() {
    const { event } = this.props;
    const { showMap } = this.state;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{event.date}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button
                color="teal"
                size="tiny"
                content={showMap ? "Hide Map" : "Show Map"}
                onClick={this.showMapToggle}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {showMap && (
          <EventDetailMap
            lat={event.venueLatLng.lat}
            lng={event.venueLatLng.lng}
          />
        )}
      </Segment.Group>
    );
  }
}

export default EventDetailInfo;
