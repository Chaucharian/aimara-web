import { call, put } from 'redux-saga/effects';
import * as actionType from '../actions/types';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* tradeButtonResponse(action) {
  try {
    yield delay(500);
    yield put({ type: actionType.SHOW_USER_ACTION_VALUE, payload: action.type === actionType.ADD_ITEM ? '+1' : '-1' });

  } catch(error) {
    yield put({ type:'Delay failed'});
  }
}
