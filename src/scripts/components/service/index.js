import React, { Component } from 'react';
import Switch from 'react-switch';
import Config from '../../config';

const styles = {
  serviceDescription: {
    display: "block",
    color: "#757575",
    textDecoration: "none"
  }
};


class Service extends Component {
  constructor(props) {
    super(props);

    this.config = new Config();

    this.props = props;

    this.state = {
      checked: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    if (this.state.checked) {
      this.props.disable();
    } else {
      this.props.enable();
    }

    const update = {};
    update[this.props.key] = this.state.checked;
    this.config.update(update);

    this.setState({
      checked
    });
  }

  render() {
    return(
      <div id={this.props.key}>
        <h3>
          {this.props.title}

          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="gdprconsent-switch"
          />
        </h3>
        <p style={styles.serviceDescription}>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Service;