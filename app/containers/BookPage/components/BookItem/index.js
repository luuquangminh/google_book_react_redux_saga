
import { Card } from 'react-materialize';
import { Col } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class BookItem extends Component {
  setInteval() {
  }
  render() {
    const { book } = this.props;
    return (
      <Col md={4}>
        <Card className="large" title={book.volumeInfo.title}>
          <h5><a href={book.infoLink} target="_blank">{book.volumeInfo.subtitle}</a></h5>
          { book.volumeInfo.authors && <p>Authors: {book.volumeInfo.authors.map((author) => <span key={author}>{author}</span>)}</p>}
          <img
            className="book-wrapper__image"
            src={this.props.book.volumeInfo.imageLinks.thumbnail}
            alt={this.props.book.volumeInfo.title}
          />
        </Card>
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
