/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_BOOK_COLLECTION_REPOS } from 'containers/App/constants';
import { loadBookCollectionReposSuccess, loadBookCollectionReposError } from './actions';

import loadBookCollection from 'utils/loadBookCollection';

/**
 * Github repos request/response handler
 */
export function* getBookCollectionRepos(action) {
  // Select username from store
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(loadBookCollection);
    yield put(loadBookCollectionReposSuccess(repos));
  } catch (err) {
      console.log(err);
    yield put(loadBookCollectionReposError (err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* googleBookCollectionData() {
  yield takeLatest(LOAD_BOOK_COLLECTION_REPOS, getBookCollectionRepos);
}
