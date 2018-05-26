import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailChat from "./EventDetailChat";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailSidebar from "./EventDetailSideBar";

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader />
        <EventDetailInfo />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
