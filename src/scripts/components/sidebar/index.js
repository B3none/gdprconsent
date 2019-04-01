import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import Widget from './widget';
import Content from './content';

const divId = 'gdprconsent';

class GDPRSidebar extends Component {
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
    console.log(this.props.isNew);
    const sidebar = <Content {...this.props} />;

    return(
      <Sidebar
        styles={
          {
            sidebar: {
              width: this.props.isNew ? '100%' : '300px'
            }
          }
        }
        sidebar={sidebar}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <Widget click={this.onSetSidebarOpen} />
      </Sidebar>
    );
  }
}

export default GDPRSidebar;