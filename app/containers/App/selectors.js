/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectBookDetail= (state) => state.get('bookDetail');
const selectRoute = (state) => state.get('route');
const selectBook = (state) => state.get('books');
const selectBookCollection =(state)=> state.get('bookCollection');
const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);
const makeSelectTerm = () => createSelector(
selectBook,
(bookState) => bookState.get('termSearch')
);
const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectBooks = () => createSelector(
  selectBook,
(bookState) => {
  return bookState.get('bookData');
  
}
);
const makeSelectBook = () => createSelector(
  selectBookDetail,
(bookDetailState) => {
  return bookDetailState.get('book');
}
);
const makeSelectInCollection = () => createSelector(
  selectBookDetail,
  (bookDetailState) => {
  return bookDetailState.get('inCollection');
  }
);
const makeSelectBookCollection = () => createSelector(
  selectBookCollection,
(bookCollectionState) => {
  return bookCollectionState.get('bookCollections');
}
);
const makeSelectisLoading = () => createSelector(
  selectBook,
  (bookState) => bookState.get('isLoading')
);
const makeSelectisLoaded = () => createSelector(
  selectBook,
  (bookState) => bookState.get('isLoaded')
);
export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectTerm,
  makeSelectBooks,
  makeSelectisLoading,
  makeSelectisLoaded,
  makeSelectBook,
  makeSelectBookCollection,
  makeSelectInCollection,
};
