
import { GET_PAGES } from '../../actions/actions';

export default function getPages(state = {}, action) {
  switch (action.type) {
    case GET_PAGES:
      return action.payload
  }
  return state;
}