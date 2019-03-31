import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Widget from './sidebar/widget';
import Content from './sidebar/content';

const divId = 'gdprconsent';
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
    const sidebar = <Content />;

    return(
      <Sidebar
        sidebar={sidebar}

        onSetOpen={this.onSetSidebarOpen}

        styles={{
          sidebar: {
            width: "300px",
            background: userConfig.sidebarBackground || "rgb(33, 37, 41)"
          }
        }}
      >
        <Widget click={this.onSetSidebarOpen} />
      </Sidebar>
    );
  }
}

export default Core;