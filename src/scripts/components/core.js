import React, { Component } from 'react';
import Widget from './widget';
import Sidebar from 'react-sidebar';

const divId = 'gdprconsent-core';

class Core extends Component {
  static get divId() {
    return divId;
  }

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(shouldOpen) {
    this.setState({
      sidebarOpen: shouldOpen
    });
  }

  render() {
    return(
      <React.Fragment>
        <Sidebar
          sidebar={<b>GDPR consent</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <Widget click={this.onSetSidebarOpen} />
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default Core;