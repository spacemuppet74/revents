import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => {
  return {
    data: state.test.data
  };
};

class TestArea extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {this.props.data}</h3>
      </div>
    );
  }
}

export default connect(mapState)(TestArea);
