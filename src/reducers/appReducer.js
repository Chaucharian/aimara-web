import { SEARCH_CRITERIA, FETCH_ALL_IMAGES, FETCH_ALL_IMAGES_SUCCESS, REMOVE_ITEM, ADD_ITEM, CHANGE_VIEW, CHANGE_COLOR_BUTTON } from '../actions/types';

const initialState = {
    items: [],
    currentSearchCriteria: '',
    isFetching: false,
    currentView: 'list',
    colorButtonTransition: false
}

const app = (state = initialState, action)  => {
    let newItems;
    switch(action.type) {
      case SEARCH_CRITERIA:
        return { ...state, currentSearchCriteria: action.criteria, isFetching: true };
      case CHANGE_VIEW:
        if(action.payload === 'list') {
          state.currentView = 'list';
        } else {
          state.currentView = 'form';
        }
        return { ...state };
      case CHANGE_COLOR_BUTTON: 
        return { ...state, colorButtonTransition: false };
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
        return { ...state, items: newItems, colorButtonTransition: true };
      case REMOVE_ITEM:
        newItems = [...state.items];
        newItems.map( item => {
          if(item.id === action.id && item.amount != 0) {
            item.amount -= 1;
          }
        });
        return { ...state, items: newItems,  colorButtonTransition: true };
      default :
        return state;
    }
  };
  
export default app;