import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import {
  incrementCounter,
  decrementCounter,
  decrementAsync,
  incrementAsync
} from "./testActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapState = state => {
  return {
    data: state.test.data,
    loading: state.test.loading
  };
};

const actions = {
  openModal,
  incrementAsync,
  decrementAsync
};

class TestArea extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: "",
    scriptLoaded: false
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  onChange = address => this.setState({ address });

  render() {
    const {
      incrementAsync,
      decrementAsync,
      data,
      openModal,
      loading
    } = this.props;
    const { scriptLoaded } = this.state;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4RoKZ1sez35FXDVIy2qWg0tHtR40LoGY&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button
          color="green"
          content="increment"
          loading={loading}
          onClick={incrementAsync}
        />
        <Button
          color="red"
          content="decrement"
          loading={loading}
          onClick={decrementAsync}
        />
        <Button
          color="blue"
          content="Open Modal"
          onClick={() => {
            openModal("TestModal", { data: 43 });
          }}
        />
        <br />
        <br />
        {scriptLoaded && (
          <form onSubmit={this.handleFormSubmit}>
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default connect(mapState, actions)(TestArea);
