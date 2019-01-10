import axios from 'axios';

// Exporting our actions
export const LOADING_PAGES = 'LOADING_PAGES';
export const GET_PAGES = 'GET_PAGES';

// An action to check if the pages are loaded accepts true or false
export function loadingPages(loading) {
  return {
    type: LOADING_PAGES,
    payload: loading,
  };
}

// This will get the pages from the API
export function fetchPages(data) {
  return {
    type: GET_PAGES,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function pagesFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingPages(false));
      dispatch(fetchPages(response.data.pages));
    });
  };
}