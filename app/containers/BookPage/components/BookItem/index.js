import { Col, Thumbnail, Card} from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bookIcon from './bookIcon.svg';
export class BookItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <Col xs={6} md={4}>
        <Thumbnail
          src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : bookIcon}
          alt={book.volumeInfo.subtitle}
        >
          <h5><a href={book.infoLink} target="_blank">{book.volumeInfo.subtitle}</a></h5>
          { book.volumeInfo.authors && <p>Authors: {book.volumeInfo.authors.map((author, id) => <span key={id}>{author}</span>)}</p>}
        </Thumbnail>
      </Col>
    );
  }
    }

BookItem.propTypes = {
  book: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};
export default BookItem;
