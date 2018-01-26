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
  LOAD_BOOK_REPOS,
  LOAD_BOOK_REPOS_SUCCESS,
  LOAD_BOOK_REPOS_ERROR,
} from '../App/constants';

// The initial state of the App
const initialState = fromJS({
  isloading: false,
  isloaded: true,
  errors: [],
  termSearch: '',
  bookData: [],
});
function bookReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOK_REPOS:
      return state
       .set('termSearch', action.search)
        .set('isloading', true)
        .set('errors', false)
        .set('isloaded', false);
    case LOAD_BOOK_REPOS_SUCCESS:
      return state
        .set('isloading', false)
        .set('isloading', true)
        .set('bookData', action.books);
    case LOAD_BOOK_REPOS_ERROR:
      return state
        .set('isloading', false)
        .set('isloading', true)
        .set('errors', action.error);
    default:
      return state;
  }
}

export default bookReducer;
