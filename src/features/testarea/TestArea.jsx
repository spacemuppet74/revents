import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

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
  state = {};
  render() {
    const { incrementCounter, decrementCounter, data } = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button color="green" content="increment" onClick={incrementCounter} />
        <Button color="red" content="decrement" onClick={decrementCounter} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestArea);
