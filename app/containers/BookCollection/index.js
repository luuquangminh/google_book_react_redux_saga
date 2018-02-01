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
import BookList from '../BookPage/components/BookList';

import { loadBookCollectionRepos } from './actions';
import { makeSelectBookCollection} from '../App/selectors';
export class BookCollection extends Component {
    componentWillMount(){
        this.props.actions.loadBookCollectionRepos();
    }
  render() {
      //console.log(this.props.bookCollections);
    return (
      <div>
        <BookList books={this.props.bookCollections} />
      </div>

    );
  }
}
BookCollection.propTypes = {
  isLoading: PropTypes.bool,
  // isLoaded: PropTypes.bool,
  // books: PropTypes.array,
  // term: PropTypes.string,
  // loading={this.props.isLoading}
  actions: PropTypes.object,
  bookCollections: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadBookCollectionRepos }, dispatch),
});
const mapStateToProps = createStructuredSelector({
bookCollections: makeSelectBookCollection(),
});
const withReducer = injectReducer({ key: 'bookCollection', reducer });
const withSaga = injectSaga({ key: 'bookCollection', saga, mode: DAEMON });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(  withSaga, withConnect, withReducer)(BookCollection);
