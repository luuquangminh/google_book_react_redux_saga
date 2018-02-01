import {
    LOAD_BOOK_DETAIL_REPOS,
    LOAD_BOOK_DETAIL_REPOS_SUCCESS,
    LOAD_BOOK_DETAIL_REPOS_ERROR,
    LOAD_BOOK_DETAIL_REPOS_LOADING,
    LOAD_BOOK_DETAIL_REPOS_LOADED,
    REMOVE_FROM_COLLECTION,
    ADD_TO_COLLECTION,
  } from '../../../App/constants';
export function loadBookDetailRepos(id) {
  return {
    type: LOAD_BOOK_DETAIL_REPOS,
    id,
  };
}
export function loadBookDetailReposSuccess(book, inCollection = false) {
  return {
    type: LOAD_BOOK_DETAIL_REPOS_SUCCESS,
    book,
    inCollection,
  };
}
export function loadBookDetailReposError(error) {
  return {
    type: LOAD_BOOK_DETAIL_REPOS_ERROR,
    error,
  };
}
export function loadBookDetailReposLoading() {
  return {
    type: LOAD_BOOK_DETAIL_REPOS_LOADING,
  };
}
export function loadBookDetailReposLoaded() {
  return {
    type: LOAD_BOOK_DETAIL_REPOS_LOADED,
  };
}
export function addToCollection(book){
    return{
        type: ADD_TO_COLLECTION,
        book
    }
}
export function removeFromCollection(book){
    return{
        type: REMOVE_FROM_COLLECTION,
        book
    }
}
