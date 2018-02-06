/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import storedb, { checkInCollection } from 'utils/storedb';
import { LOAD_BOOK_DETAIL_REPOS, ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION } from 'containers/App/constants';
import { loadBookDetailReposSuccess, loadBookDetailReposError } from './actions';

/**
 * Github repos request/response handler
 */
export function* getBookDetailRepos(action) {
  // Select username from store
  // const term = yield select(makeSelectTerm(action.term));
  const requestURL = `https://www.googleapis.com/books/v1/volumes/${action.id}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    const inCollection = yield call(checkInCollection, repos.id);
    yield put(loadBookDetailReposSuccess(repos, inCollection));
  } catch (err) {
    yield put(loadBookDetailReposError(err));
  }
}
export function* addToCollectionSaga(action) {
  try {
    storedb.addToCollection(action.book);
        // Call our request helper (see 'utils/request')
  } catch (err) {
    console.log(err);
  }
}

export function* removeFromCollectionSaga(action) {
  try {
    storedb.removeFromCollection(action.book);
        // Call our request helper (see 'utils/request')
  } catch (err) {
    console.log(err);
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* googleBookDetailData() {
  yield takeLatest(LOAD_BOOK_DETAIL_REPOS, getBookDetailRepos);
  yield takeLatest(ADD_TO_COLLECTION, addToCollectionSaga);
  yield takeLatest(REMOVE_FROM_COLLECTION, removeFromCollectionSaga);
}
