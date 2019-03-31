import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const divId = 'gdprconsent';

class Sidebar extends Component {
  static get divId() {
    return divId;
  }

  constructor(props) {
    super(props);

    if (document.getElementById(divId) === null) {
      let sidebar = document.createElement('div');
      sidebar.id = Sidebar.divId;
      document.body.appendChild(sidebar);
    }

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