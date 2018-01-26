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
      <Row className="show-grid">
        <h2 className="landing-title">Google Books</h2>
        <FormGroup onSubmit={this.handleSubmit} >
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Search Books"
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button onClick={this.handleSubmit}>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Row>


    );
  }
}
SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default SearchBox;
