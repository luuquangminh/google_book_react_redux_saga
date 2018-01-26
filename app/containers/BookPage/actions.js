import {
    LOAD_BOOK_REPOS,
    LOAD_BOOK_REPOS_SUCCESS,
    LOAD_BOOK_REPOS_ERROR,
    LOAD_BOOK_REPOS_LOADING,
    LOAD_BOOK_REPOS_LOADED,
  } from '../App/constants';
export function loadBookRepos(search) {
  return {
    type: LOAD_BOOK_REPOS,
    search,
  };
}
export function loadBookReposSuccess(books) {
  return {
    type: LOAD_BOOK_REPOS_SUCCESS,
    books,
  };
}
export function loadBookReposError(error) {
  return {
    type: LOAD_BOOK_REPOS_ERROR,
    error,
  };
}
export function loadBookReposLoading() {
  return {
    type: LOAD_BOOK_REPOS_LOADING,
  };
}
export function loadBookReposLoaded() {
  return {
    type: LOAD_BOOK_REPOS_LOADED,
  };
}
