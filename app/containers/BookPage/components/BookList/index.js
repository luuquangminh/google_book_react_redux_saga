import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles.css';
import BookItem from '../BookItem';

export class BookList extends Component {
  renderBooks() {
    return this.props.books.map((book) => <BookItem book={book} key={book.id} />);
  }
  render() {
    return (
      <div className="books">
        {this.renderBooks()}
      </div>
    );
  }
}
BookList.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};
export default BookList;
