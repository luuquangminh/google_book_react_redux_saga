import { Row, FormGroup, FormControl, InputGroup, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import BookItem from '../BookItem';
import PropTypes from 'prop-types';

export class BookList extends Component {
  renderBooks() { 
    return this.props.books.map((book) => {

    return <BookItem book={book} key={book.id} />
});
  }

  render() {
    return (
      <div>
        {this.renderBooks()}
      </div>
    );
  }
}
BookList.propTypes = {
  books: PropTypes.array,
};
export default BookList;
