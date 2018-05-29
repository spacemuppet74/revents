/*global google */

import React, { Component } from "react";
import {
  Segment,
  Form,
  Button,
  Grid,
  Header,
  HeaderContent
} from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from "moment";
import Script from 'react-load-script'
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/dateInput";
import PlaceInput from '../../../app/common/form/PlaceInput'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.find(el => el.id === eventId);
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at less 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  }
  onFormSubmit = values => {
    console.log("formit submit ", values);
    values.date = moment(values.date).format();
    values.venueLatLng = this.state.venueLatLng
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => this.setState({ cityLatLng: latlng }))
      .then(() => this.props.change('city', selectedCity))
  }

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => this.setState({ venueLatLng: latlng }))
      .then(() => this.props.change('venue', selectedVenue))
  }

  handleScriptLoaded = () => this.setState({ scriptLoaded: true })

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4RoKZ1sez35FXDVIy2qWg0tHtR40LoGY&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give you Event a Name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                placeholder="What is your Event about"
                options={category}
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={PlaceInput}
                placeholder="Event City"
                options={{ types: ['(cities)'] }}
                onSelect={this.handleCitySelect}
              />
              {this.state.scriptLoaded &&
                <Field
                  name="venue"
                  type="text"
                  component={PlaceInput}
                  placeholder="Event Venue"
                  options={{
                    location: new google.maps.LatLng(this.state.cityLatLng),
                    radius: 1000,
                    types: ['establishment']
                  }}
                  onSelect={this.handleVenueSelect}
                />}
              <Field
                name="date"
                type="text"
                component={DateInput}
                placeholder="Date and Time of the event"
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
              />

              <Button
                positive
                type="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button onClick={() => this.props.history.goBack()} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
