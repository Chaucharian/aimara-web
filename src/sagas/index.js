// import { takeLatest, takeEvery } from 'redux-saga';
import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/types';
import { fetchItems, fetchItemsByCriteria } from './items';

function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield all([
    takeLatest(type.FETCH_ITEMS, fetchItems),
    takeLatest(type.SEARCH_CRITERIA, fetchItemsByCriteria),
    ]);
}

export default rootSaga;