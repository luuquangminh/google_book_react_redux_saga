/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_BOOK_REPOS } from 'containers/App/constants';
import { loadBookReposSuccess, loadBookReposError } from 'containers/BookPage/actions';

import request from 'utils/request';
import { makeSelectTerm } from 'containers/App/selectors';

/**
 * Github repos request/response handler
 */
export function* getBookRepos(action) {
  // Select username from store
  const term = yield select(makeSelectTerm(action.term));
  const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${term}`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(loadBookReposSuccess(repos.items));
  } catch (err) {
    yield put(loadBookReposError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* googleBookData() {
  yield takeLatest(LOAD_BOOK_REPOS, getBookRepos);
}
