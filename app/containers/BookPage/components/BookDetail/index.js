import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { makeSelectBook, makeSelectInCollection } from '../../../App/selectors';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import { loadBookDetailRepos, removeFromCollection, addToCollection } from './actions';
import injectReducer from 'utils/injectReducer';
import LinesEllipsis from 'react-lines-ellipsis';
import { Card } from 'react-materialize';
import { Col } from 'react-bootstrap';
import saga from './saga';
import reducer from './reducer';
import { Button } from 'react-materialize';

class BookDetail extends  Component {
     componentWillMount(){
         this.props.actions.loadBookDetailRepos(this.props.match.params.id)
    }
    handleAdd(){
    if(this.props.inCollection){
    this.props.actions.removeFromCollection(this.props.book)
        }
    else{
    this.props.actions.addToCollection(this.props.book)
    }
    }
    render(){
        //console.log(this.state);
        //console.log(this.props);
        //const bookId = this.props.book.id
        const {book, inCollection} = this.props
        //const book = this.props.book
        if(!book){
        return <div>loading...</div>
        }
       let button = <Button className="button" onClick={() =>{this.handleAdd()}}>Add to Collection </Button>
        if(inCollection){
           button= <Button className="button" onClick={() =>{this.handleAdd()}}>Remove from Collection </Button>
        }
        return(
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
                    maxLine="10"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
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
    inCollection: PropTypes.bool,
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ loadBookDetailRepos,removeFromCollection, addToCollection }, dispatch),
  });
  const mapStateToProps = createStructuredSelector({
    book: makeSelectBook(),
    inCollection: makeSelectInCollection(),
  });
  const withReducer = injectReducer({ key: 'book', reducer });
  const withSaga = injectSaga({ key: 'book', saga, mode: DAEMON });
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default compose(withSaga, withConnect, withReducer)(BookDetail);
  