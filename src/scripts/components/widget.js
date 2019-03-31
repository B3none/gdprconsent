import React, { Component } from 'react';

class Widget extends Component {
  render() {
    return(
      <button onClick={() => this.props.click(true)}>
        Open sidebar
      </button>
    );
  }
}

export default Widget;