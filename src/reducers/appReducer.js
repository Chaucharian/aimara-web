import { SEARCH_CRITERIA, FETCH_ALL_IMAGES, FETCH_ALL_IMAGES_SUCCESS } from '../actions/types';

const initialState = {
    items: [],
    currentSearchCriteria: '',
    isFetching: false
}

const app = (state = initialState, action)  => {
    switch(action.type) {
      case SEARCH_CRITERIA:
        return { ...state, currentSearchCriteria: action.criteria };
      case FETCH_ALL_IMAGES:
      state.isFetching = true;  
      return { ...state };
      case FETCH_ALL_IMAGES_SUCCESS:
        return { ...state, items: action.items, isFetching: false };
      default :
        return state;
    }
  };
  
export default app;