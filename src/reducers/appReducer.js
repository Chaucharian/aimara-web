import FETCH_ALL_IMAGES from '../actions/types';
import SEARCH_CRITERIA from '../actions/types';

const app = (state = {}, action)  => {
    switch(action.type) {
      case SEARCH_CRITERIA:
        console.log('sdas');
      break;
      case FETCH_ALL_IMAGES:
      console.log('EEA');
    //  return action.payload;
      default :
        return state;
    }
  };
  
export default app;