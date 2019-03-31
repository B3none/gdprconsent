import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Widget from './sidebar/widget';
import Content from './sidebar/content';

const divId = 'gdprconsent';

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
    console.log('called');

    this.setState({
      sidebarOpen: shouldOpen
    });
  }

  render() {
    const sidebar = <Content />;

    return(
      <Sidebar
        sidebar={sidebar}

        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <Widget click={this.onSetSidebarOpen} />
      </Sidebar>
    );
  }
}

export default Core;