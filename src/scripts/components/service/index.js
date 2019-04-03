import React, { Component } from 'react';
import Switch from 'react-switch';
import Storage from '../../storage';

class Service extends Component {
  constructor(props) {
    super(props);

    let config = Storage.get();

    this.state = {
      checked: config[this.props.storage_key] || false
    };

    this.runCallbacks(this.state.checked);

    this.handleChange = this.handleChange.bind(this);
  }

  runCallbacks(isChecked) {
    if (isChecked) {
      this.props.disable();
      return;
    }

    this.props.enable();
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