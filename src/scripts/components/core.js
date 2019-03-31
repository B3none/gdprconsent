import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Widget from './widget';

const divId = 'gdprconsent-core';
const userConfig = window.gdprconsent || {};

class Core extends Component {
  static get divId() {
    return divId;
  }

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: this.props.isNew
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
      <Sidebar
        // SIDEBAR TITLE
        sidebar={
          <h2 style={{"text-align": "center", "color": userConfig.sidebarTitleColour || "rgba(255,255,255,0.75)"}}>
            GDPR Consent
          </h2>
        }

        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            width: "300px",
            background: userConfig.sidebarBackground || "#212529"
          }
        }}
      >
        <Widget click={this.onSetSidebarOpen} />
      </Sidebar>
    );
  }
}

export default Core;