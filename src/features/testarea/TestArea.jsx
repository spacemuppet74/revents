import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const mapState = state => {
  return {
    data: state.test.data
  };
};

const actions = {
  incrementCounter,
  decrementCounter
}

class TestArea extends Component {
  state = {
    address: '',
    scriptLoaded: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  handleScriptLoad = () => this.setState({ scriptLoaded: true })

  onChange = (address) => this.setState({ address })

  render() {
    const { incrementCounter, decrementCounter, data } = this.props
    const { scriptLoaded } = this.state
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4RoKZ1sez35FXDVIy2qWg0tHtR40LoGY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button color="green" content="increment" onClick={incrementCounter} />
        <Button color="red" content="decrement" onClick={decrementCounter} />
        <br />
        <br />
        {scriptLoaded &&
          <form onSubmit={this.handleFormSubmit}>
            <PlacesAutocomplete inputProps={inputProps} />
            <button type="submit">Submit</button>
          </form>
        }
      </div>
    );
  }
}

export default connect(mapState, actions)(TestArea);
