import { call, put } from 'redux-saga/effects';
import * as actionType from '../actions/types';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* buttonColorChange() {
  try {
    yield delay(200);
    yield put({ type: actionType.CHANGE_COLOR_BUTTON });

  } catch(error) {
    yield put({ type:'Delay failed'});
  }
}
