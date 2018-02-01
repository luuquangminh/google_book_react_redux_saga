import {
    LOAD_BOOK_COLLECTION_REPOS,
    LOAD_BOOK_COLLECTION_REPOS_SUCCESS,
    LOAD_BOOK_COLLECTION_REPOS_ERROR,
  } from '../App/constants';
export function loadBookCollectionRepos() {
  return {
    type: LOAD_BOOK_COLLECTION_REPOS,
  };
}
export function loadBookCollectionReposSuccess(bookCollections) {
  return {
    type: LOAD_BOOK_COLLECTION_REPOS_SUCCESS,
    bookCollections,
  };
}
export function loadBookCollectionReposError(error) {
  return {
    type: LOAD_BOOK_COLLECTION_REPOS_ERROR,
    error,
  };

}
