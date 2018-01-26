import { Row, FormGroup, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    if (this.props.loading) { return; }
    this.props.search(this.state.value);
  }

  render() {
    return (
      <Row>
        <input
          type="text"
          id="txtName"
          name="name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit} >Search</Button>
        <h1>{this.state.value}</h1>
      </Row>


    );
  }
}
SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default SearchBox;
