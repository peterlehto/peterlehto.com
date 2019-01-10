import { LOADING_PAGES } from '../../actions/actions';

export default function loadingPages(state = true, action) {
  switch (action.type) {
    case LOADING_PAGES:
      return action.payload;
  }
  return state;
}