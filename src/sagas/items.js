import { call, put, delay } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import items from '../model/items.js';

export function* fetchItems() {
  try {

    //Get User Info
 //   const weather = yield call(fetchWeather);

    //Tell the store to save the user Info also activate loadDashboardSecuenced
    yield put({ type: actionType.FETCH_ITEMS_SUCCESS, items});

  } catch(error) {
    yield put({ type:'Fetching failed'});
  }
}

export function* fetchItemsByCriteria(action) {
  try {
    //Get User Info
 //   const weather = yield call(fetchWeather);

    //Tell the store to save the user Info also activate loadDashboardSecuenced
//    yield put(fetchWeatherSuccess(weather));

    if(action.criteria === '') {
      yield put({ type: actionType.FETCH_ITEMS_SUCCESS, items });
    } else {
      const result =  items.filter(item => item.title === action.criteria);
      yield  put({ type: actionType.FETCH_ITEMS_SUCCESS, items: result });
    }
    
  } catch(error) {
 //   yield put(fetchWeatherFailure('Fetching failed'));
  }
}

export function* refreshOrderList() {
  yield put({ type: actionType.GET_ORDER_LIST });
}