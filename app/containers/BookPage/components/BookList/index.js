import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BookItem from '../BookItem';
import './styles.css';

export class BookList extends Component {
  renderBooks() {
    return this.props.books.map((book) => <BookItem book={book} key={book.id} isLoading={this.props.isLoading} />);
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
  isLoading: PropTypes.bool,
};
export default BookList;
