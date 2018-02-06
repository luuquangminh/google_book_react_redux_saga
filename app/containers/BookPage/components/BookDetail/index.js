import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card } from 'react-materialize';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import injectReducer from 'utils/injectReducer';
import LinesEllipsis from 'react-lines-ellipsis';
import { Col } from 'react-bootstrap';
import saga from './saga';

import reducer from './reducer';
import { makeSelectBook, makeSelectInCollection } from '../../../App/selectors';
import { loadBookDetailRepos, removeFromCollection, addToCollection } from './actions';

class BookDetail extends Component {
  componentWillMount() {
    this.props.actions.loadBookDetailRepos(this.props.match.params.id);
  }
  handleAdd() {
    if (this.props.inCollection) {
      this.props.actions.removeFromCollection(this.props.book);
    } else {
      this.props.actions.addToCollection(this.props.book);
    }
  }
  render() {
    const styles = {
      buttonRe: {
        color: 'white',
        backgroundColor: '#f75e33',
      },
      buttonAdd: {
        color: 'white',
        backgroundColor: '#cc2337',
      },
    };
        // console.log(this.state);
        // console.log(this.props);
        // const bookId = this.props.book.id
    const { book, inCollection } = this.props;
        // const book = this.props.book
    if (!book) {
      return <div>loading...</div>;
    }
    let button = <Button style={styles.buttonAdd} onClick={() => { this.handleAdd(); }}>Add to Collection </Button>;
    if (inCollection) {
      button = <Button style={styles.buttonRe} onClick={() => { this.handleAdd(); }}>Remove from Collection </Button>;
    }
    return (
      <Col md={12}>
        <Card className="large">
          <strong><LinesEllipsis
            text={book.volumeInfo.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          /></strong>
          <h5><a href={book.infoLink} target="_blank">{book.volumeInfo.subtitle}</a></h5>
          <h5>publishedDate: <strong>{book.volumeInfo.publishedDate}</strong></h5>
          { book.volumeInfo.authors && <p>Authors: {book.volumeInfo.authors.map((author) => <span key={author}>{author}</span>)}</p>}
          {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
            <img
              className="book-wrapper__image"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
                  )}
          <LinesEllipsis
            text={book.volumeInfo.description}
            maxLine="6"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <br />
          <div>{button}</div>
        </Card>
      </Col>

    );
  }
}
BookDetail.propTypes = {
  isLoading: PropTypes.bool,
    // isLoaded: PropTypes.bool,
    // books: PropTypes.array,
    // term: PropTypes.string,
    // loading={this.props.isLoading}
  actions: PropTypes.object,
  book: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  match: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  inCollection: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadBookDetailRepos, removeFromCollection, addToCollection }, dispatch),
});
const mapStateToProps = createStructuredSelector({
  book: makeSelectBook(),
  inCollection: makeSelectInCollection(),
});
const withReducer = injectReducer({ key: 'book', reducer });
const withSaga = injectSaga({ key: 'book', saga, mode: DAEMON });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withSaga, withConnect, withReducer)(BookDetail);

