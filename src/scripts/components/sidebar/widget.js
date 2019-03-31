import React, { Component } from 'react';

class Widget extends Component {
  render() {
    return(
      <button
        className={[
          'gdprconsent_widget'
        ].join(' ')}
        title={'GDPR Consent Settings'}

        onClick={() => this.props.click(true)}
      >
        &#9881;
      </button>
    );
  }
}

export default Widget;