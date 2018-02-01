/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
//Book
export const LOAD_BOOK_REPOS = 'boilerplate/App/LOAD_BOOK_REPOS';
export const LOAD_BOOK_REPOS_SUCCESS = 'boilerplate/App/LOAD_BOOK_REPOS_SUCCESS';
export const LOAD_BOOK_REPOS_ERROR = 'boilerplate/App/LOAD_BOOK_REPOS_ERROR';
export const LOAD_BOOK_REPOS_LOADING = 'boilerplate/App/LOAD_BOOK_REPOS_LOADING';
export const LOAD_BOOK_REPOS_LOADED = 'boilerplate/App/LOAD_BOOK_REPOS_LOADED';
//books
export const LOAD_BOOK_DETAIL_REPOS = 'boilerplate/App/LOAD_BOOK_DETAIL_REPOS';
export const LOAD_BOOK_DETAIL_REPOS_SUCCESS = 'boilerplate/App/LOAD_BOOK_DETAIL_REPOS_SUCCESS';
export const LOAD_BOOK_DETAIL_REPOS_ERROR = 'boilerplate/App/LOAD_BOOK_DETAIL_REPOS_ERROR';
export const LOAD_BOOK_DETAIL_REPOS_LOADING = 'boilerplate/App/LOAD_BOOK_DETAIL_REPOS_LOADING';
export const LOAD_BOOK_DETAIL_REPOS_LOADED = 'boilerplate/App/LOAD_BOOK_DETAIL_REPOS_LOADED';
// book collection
export const LOAD_BOOK_COLLECTION_REPOS = 'boilerplate/App/LOAD_BOOK_COLLECTION_REPOS';
export const LOAD_BOOK_COLLECTION_REPOS_SUCCESS = 'boilerplate/App/LOAD_BOOK_COLLECTION_REPOS_SUCCESS';
export const LOAD_BOOK_COLLECTION_REPOS_ERROR = 'boilerplate/App/LOAD_BOOK_COLLECTION_REPOS_ERROR';
// 
export const ADD_TO_COLLECTION = 'boilerplate/App/ADD_TO_COLLECTION';
export const REMOVE_FROM_COLLECTION= 'boilerplate/App/REMOVE_FROM_COLLECTION';