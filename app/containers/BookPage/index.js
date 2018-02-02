/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { DAEMON } from 'utils/constants';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import saga from './saga';
import reducer from './reducer';
import SearchBox from './components/SearchBox';
import BookList from './components/BookList';
import { loadBookRepos } from './actions';
import { makeSelectBooks, makeSelectTerm, makeSelectisLoading, makeSelectisLoaded } from '../App/selectors';
export class BookPage extends Component {
  searchClick(term) {
    this.props.actions.loadBookRepos(term);
  }
  render() {
    return (
      <div>
        <H2>
        </H2>
        <SearchBox search={(term) => this.searchClick(term)} loading={this.props.isLoading} />
        <BookList books={this.props.books} />
      </div>

    );
  }
}
BookPage.propTypes = {
  isLoading: PropTypes.bool,
  // isLoaded: PropTypes.bool,
  // books: PropTypes.array,
  // term: PropTypes.string,
  // loading={this.props.isLoading}
  actions: PropTypes.object,
  books: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadBookRepos }, dispatch),
});
const mapStateToProps = createStructuredSelector({
  books: makeSelectBooks(),
  term: makeSelectTerm(),
  isLoading: makeSelectisLoading(),
  isLoaded: makeSelectisLoaded(),
});
const withReducer = injectReducer({ key: 'books', reducer });
const withSaga = injectSaga({ key: 'books', saga, mode: DAEMON });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withSaga, withConnect, withReducer)(BookPage);
