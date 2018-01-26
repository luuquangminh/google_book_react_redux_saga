/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import SearchBox from './components/SearchBox';
import BookList from './components/BookList';
import { DAEMON } from 'utils/constants';
import messages from './messages';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose, bindActionCreators } from 'redux';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import { createStructuredSelector } from 'reselect';
import { loadBookRepos } from './actions';
import { makeSelectBooks, makeSelectTerm, makeSelectisLoading, makeSelectisLoaded } from '../App/selectors';
export class BookPage extends Component {
  searchClick(term) {
    this.props.actions.loadBookRepos(term);
  }
  render() {
    return (
      <div>
        <SearchBox search={(term) => this.searchClick(term)} loading={this.props.isLoading} />
        <BookList books={this.props.books} />
      </div>

    );
  }
}
BookPage.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  //books: PropTypes.array,
  // term: PropTypes.string,
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
