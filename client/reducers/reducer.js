import { combineReducers } from 'redux';
import getPages from './page_actions/get_pages.js';
import loadingPages from './page_actions/loading_pages.js';

const reducers = combineReducers({
  pages: getPages,
  loadPages: loadingPages,
});

export default reducers;