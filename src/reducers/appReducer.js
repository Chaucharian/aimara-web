import { SEARCH_CRITERIA, FETCH_ITEMS, FETCH_ITEMS_SUCCESS, REMOVE_ITEM, ADD_ITEM, CHANGE_VIEW, GET_ORDER_LIST } from '../actions/types';

const initialState = {
    items: [],
    currentOrderIds: [],
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
    let items = [], currentOrderIds = [], orderList = [];
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
      case FETCH_ITEMS:
      state.isFetching = true;  
      return { ...state };
      case FETCH_ITEMS_SUCCESS:
        return { ...state, items: [...action.items], isFetching: false };
      case GET_ORDER_LIST:
        currentOrderIds = [...state.currentOrderIds];
        items = [...state.items];
        currentOrderIds.map( orderId => {
          items.map( item => {
            if(item.id === orderId) {
              orderList.push(item);
            }
          });
        });
        orderList = [...orderList];
        return { ...state, orderList };
      case ADD_ITEM:
        items = [...state.items];
        currentOrderIds = [...state.currentOrderIds];
        items.map( item => {
          if(item.id === action.id) {
            item.amount += 1;           
          }
        });
        currentOrderIds.push(action.id);
        currentOrderIds = currentOrderIds.unique();
        return { ...state, items, currentOrderIds };
      case REMOVE_ITEM:
        items = [...state.items];
        currentOrderIds = [...state.currentOrderIds];

        items.map( item => {
          if(item.id === action.id && item.amount !== 0) {
            item.amount -= 1;
            if(item.amount === 0) {
              currentOrderIds.map( id => {
                if(id === item.id) {
                  currentOrderIds.splice(currentOrderIds.indexOf(id), 1);
                  currentOrderIds = [...currentOrderIds];
                }
              });
            }
          } 
        });

        return { ...state, items, currentOrderIds };
      default :
        return state;
    }
  };
  
export default app;