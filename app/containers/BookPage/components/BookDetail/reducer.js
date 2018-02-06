/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_BOOK_DETAIL_REPOS,
  LOAD_BOOK_DETAIL_REPOS_SUCCESS,
  LOAD_BOOK_DETAIL_REPOS_ERROR,
  ADD_TO_COLLECTION,
  REMOVE_FROM_COLLECTION,
} from '../../../App/constants';

// The initial state of the App
const initialState = fromJS({
  isloading: false,
  isloaded: true,
  errors: [],
  book: null,
  inCollection: false,
});
function bookDetailReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOK_DETAIL_REPOS:
      return state
        .set('isloading', true)
        .set('errors', false)
        .set('isloaded', false);
    case LOAD_BOOK_DETAIL_REPOS_SUCCESS:
      return state
        .set('isloading', false)
        .set('isloading', true)
        .set('book', action.book)
        .set('inCollection', action.inCollection);
    case LOAD_BOOK_DETAIL_REPOS_ERROR:
      return state
        .set('isloading', false)
        .set('isloading', true)
        .set('errors', action.error)
        .set('book', null);
    case ADD_TO_COLLECTION:
      return state
        .set('inCollection', true);
    case REMOVE_FROM_COLLECTION:
      return state
        .set('inCollection', false);
    default:
      return state;
  }
}

export default bookDetailReducer;
