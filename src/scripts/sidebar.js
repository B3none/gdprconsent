import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const divId = 'gdprconsent';

class Sidebar extends Component {
  static get divId() {
    return divId;
  }

  constructor(props) {
    super(props);

    ReactDOM.render(<Sidebar />, document.getElementById(divId));
  }

  render() {
    return(
      <div>
        <p>Test</p>
      </div>
    );
  }
}

export default Sidebar;