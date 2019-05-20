import { SEARCH_CRITERIA, FETCH_ALL_IMAGES, FETCH_ALL_IMAGES_SUCCESS, REMOVE_ITEM, ADD_ITEM, CHANGE_VIEW, SHOW_USER_ACTION_VALUE } from '../actions/types';

const initialState = {
    items: [],
    currentSearchCriteria: '',
    isFetching: false,
    currentView: 'list',
    userPicking: false,
    userActionValue: ''
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
      case SHOW_USER_ACTION_VALUE: 
        return { ...state, userPicking: false, userActionValue: action.payload };
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
        return { ...state, items: newItems, userPicking: true };
      case REMOVE_ITEM:
        newItems = [...state.items];
        newItems.map( item => {
          if(item.id === action.id && item.amount != 0) {
            item.amount -= 1;
          }
        });
        return { ...state, items: newItems,  userPicking: true };
      default :
        return state;
    }
  };
  
export default app;