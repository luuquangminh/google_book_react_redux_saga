import { Row, Input, Icon, Button } from 'react-materialize';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './search-box.css';

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '',
    };
    //this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    if (this.props.isLoading) { return; }
    this.props.search(this.state.value);
  }
  handleKeyUp(event){
if(event.key== 'Enter'){
  this.handleSubmit()
}
  }

  render() {
    return (
      <Row className="show-grid">
        <Input
          className={styles.input}
          s={10}
          label="Search books"
          type="text"
          value={this.state.value}
          autoFocus={true}
          onChange={(event)=>{this.handleChange(event)}}
          onKeyUp={(event)=>{this.handleKeyUp(event)}}
        ><Icon>search</Icon></Input>
        <Button className="button" onClick={()=>{this.handleSubmit()}}>Search</Button>
      </Row>
    );
  }
}
SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default SearchBox;
