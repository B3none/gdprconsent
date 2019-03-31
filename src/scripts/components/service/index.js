import React, { Component } from 'react';
import Switch from 'react-switch';
import Config from '../../config';

class Service extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      checked: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    if (this.state.checked) {
      this.props.enable();
    } else {
      this.props.disable();
    }

    const update = {};
    update[this.props.key] = this.state.checked;
    Config.update(update);

    this.setState({
      checked
    });
  }

  render() {
    return(
      <div id={this.props.key}>
        <h3 style={/*styles.sidebarLink*/}>
          {this.props.title}
        </h3>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          className="gdprconsent-switch"
        />
        <p style={styles.sidebarDescription}>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Service;