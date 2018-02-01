
import { Card } from 'react-materialize';
import { Col } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import PropTypes from 'prop-types';


export class BookItem extends Component {
  setInteval() {
  }
  render() {
    const { book, fullVersion } = this.props;
    return (
      (<Col md={4}>
        <Card className="large">
          <strong><LinesEllipsis
            text={book.volumeInfo.title}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          /></strong>
          <h5><a href={book.infoLink} target="_blank">{book.volumeInfo.subtitle}</a></h5>
          <h5>publishedDate: <strong>{book.volumeInfo.publishedDate}</strong></h5>
          { book.volumeInfo.authors && <p>Authors: {book.volumeInfo.authors.map((author) => <span key={author}>{author}</span>)}</p>}
          {this.props.book.volumeInfo.imageLinks && this.props.book.volumeInfo.imageLinks.thumbnail && (
            <img
              className="book-wrapper__image"
              src={this.props.book.volumeInfo.imageLinks.thumbnail}
              alt={this.props.book.volumeInfo.title}
            />
          )}
          <LinesEllipsis
            text={book.volumeInfo.description}
            maxLine="5"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          {fullVersion
            ? ''
            : (
              <div><Link to={`/book/${book.id}`} className="book-wrapper__link" role="button">More info</Link></div>

            )}
        </Card>
      </Col>)
    );
  }
    }

BookItem.propTypes = {
  book: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  fullVersion: PropTypes.bool,
};
export default BookItem;
