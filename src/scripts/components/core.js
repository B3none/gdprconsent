import React, { Component } from 'react';
import Widget from './widget';
import Sidebar from './sidebar';

const divId = 'gdprconsent-core';

class Core extends Component {
  static get divId() {
    return divId;
  }

  render() {
    return(
      <React.Fragment>
        <Widget />

        <Sidebar />
      </React.Fragment>
    );
  }
}

export default Core;