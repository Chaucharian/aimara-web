import { SEARCH_CRITERIA, FETCH_ALL_IMAGES, FETCH_ALL_IMAGES_SUCCESS, REMOVE_ITEM, ADD_ITEM } from '../actions/types';

const initialState = {
    items: [],
    currentSearchCriteria: '',
    isFetching: false
}

const app = (state = initialState, action)  => {
    let newItems;
    switch(action.type) {
      case SEARCH_CRITERIA:
        return { ...state, currentSearchCriteria: action.criteria, isFetching: true };
      case FETCH_ALL_IMAGES:
      state.isFetching = true;  
      return { ...state };
      case FETCH_ALL_IMAGES_SUCCESS:
        return { ...state, items: [...action.items], isFetching: false };
      case ADD_ITEM:
        newItems = [...state.items];
        newItems.map( item => {
          if(item.id === action.id) {
            item.amount += 1;
          }
        });
        return { ...state, items: newItems };
      case REMOVE_ITEM:
        newItems = [...state.items];
        newItems.map( item => {
          if(item.id === action.id && item.amount != 0) {
            item.amount -= 1;
          }
        });
        return { ...state, items: newItems };
      default :
        return state;
    }
  };
  
export default app;