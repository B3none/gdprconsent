import React, { Component } from 'react';
import Switch from 'react-switch';
import Storage from '../../storage';

class Service extends Component {
  constructor(props) {
    super(props);

    let config = Storage.get();

    this.runCallbacks(config[this.props.storage_key] || false);

    this.state = {
      checked: config[this.props.storage_key] || false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  runCallbacks(isChecked) {
    if (isChecked) {
      this.props.disable();
    } else {
      this.props.enable();
    }
  }

  handleChange(checked) {
    this.runCallbacks(this.state.checked);

    const update = {};
    update[this.props.storage_key] = checked;
    Storage.update(update);

    this.setState({
      checked
    });
  }

  render() {
    return(
      <div id={this.props.key} className='gdprconsent-service'>
        <h3>
          {this.props.title}

          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="switch"
          />
        </h3>
        <p className="description">
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Service;