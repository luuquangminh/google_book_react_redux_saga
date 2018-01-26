import { Row, FormGroup, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BookItem extends Component {
  render() {
    const { book } = this.props;
    console.log(book);
    return (
      <div>{book.id}
      <div>{book.volumeInfo.description}</div>
    
      </div>
   
    );
  }
    }

BookItem.propTypes = {
  book: PropTypes.object,
};
export default BookItem;
