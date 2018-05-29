import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete from 'react-places-autocomplete'

const styles = {
  autocompleteContainer: {
    zIndex: 1000
  }
}


class PlaceInput extends Component {
  state = {
    address: '',
    scriptLoaded: false
  }

  handleScriptLoaded = () => this.setState({ scriptLoaded: true })

  render() {
    const { input, width, onSelect, placeholder, options, meta: { touched, error } } = this.props
    const { scriptLoaded } = this.state
    return (
      <Form.Field error={touched && !!error} width={width} autoComplete={false}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4RoKZ1sez35FXDVIy2qWg0tHtR40LoGY&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {scriptLoaded &&
          <PlacesAutocomplete
            inputProps={{ ...input, placeholder }}
            onSelect={onSelect}
            options={options}
            styles={styles}
          />
        }
        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    )
  }
}

export default PlaceInput;