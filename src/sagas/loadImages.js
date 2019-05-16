import { call, put } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import items from '../model/items.js';

export function* loadAllImages() {
  try {

    //Get User Info
 //   const weather = yield call(fetchWeather);

    //Tell the store to save the user Info also activate loadDashboardSecuenced
    yield put({ type: actionType.FETCH_ALL_IMAGES_SUCCESS, items});

  } catch(error) {
    yield put({ type:'Fetching failed'});
  }
}

export function* loadImagesByCriteria(action) {
  try {

    //Get User Info
 //   const weather = yield call(fetchWeather);

    //Tell the store to save the user Info also activate loadDashboardSecuenced
//    yield put(fetchWeatherSuccess(weather));
    const result =  items.filter(item => item.title === action.criteria);
    yield put({ type: actionType.FETCH_ALL_IMAGES_SUCCESS, items: result });
  } catch(error) {
 //   yield put(fetchWeatherFailure('Fetching failed'));
  }
}