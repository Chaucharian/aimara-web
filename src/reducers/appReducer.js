import { SEARCH_CRITERIA, FETCH_ALL_IMAGES, FETCH_ALL_IMAGES_SUCCESS, REMOVE_ITEM, ADD_ITEM, CHANGE_VIEW, CHANGE_COLOR_BUTTON } from '../actions/types';

const initialState = {
    items: [],
    orderList: [],
    currentSearchCriteria: '',
    isFetching: false,
    currentView: 'list',
}

Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

const app = (state = initialState, action)  => {
    let items, orderList;
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
      case FETCH_ALL_IMAGES:
      state.isFetching = true;  
      return { ...state };
      case FETCH_ALL_IMAGES_SUCCESS:
        return { ...state, items: [...action.items], isFetching: false };
      case ADD_ITEM:
        items = [...state.items];
        orderList = [...state.orderList];
        items.map( item => {
          if(item.id === action.id) {
            item.amount += 1;           
          }
        });
        orderList.push(action.id);
        orderList = orderList.unique();
        return { ...state, items, orderList };
      case REMOVE_ITEM:
        items = [...state.items];
        orderList = [...state.orderList];

        items.map( item => {
          if(item.id === action.id && item.amount !== 0) {
            item.amount -= 1;
            if(item.amount === 0) {
              orderList.map( id => {
                if(id === item.id) {
                  orderList.splice(orderList.indexOf(id), 1);
                  orderList = [...orderList];
                }
              });
            }
          } 
        });

        return { ...state, items, orderList };
      default :
        return state;
    }
  };
  
export default app;