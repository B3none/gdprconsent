import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const divId = 'gdprconsent';

class Sidebar extends Component {
  static get divId() {
    return divId;
  }

  render() {
    return(
      <div>
        <p>Test</p>
      </div>
    );
  }
}

ReactDOM.render(<Sidebar />, document.getElementById(divId));

export default Sidebar;