import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailChat from "./EventDetailChat";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailSidebar from "./EventDetailSideBar";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.find(item => item.id === eventId);
  }

  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
