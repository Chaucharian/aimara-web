// import { takeLatest, takeEvery } from 'redux-saga';
import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as type from '../actions/types';
import { loadAllImages, loadImagesByCriteria } from './images';
import { buttonColorChange } from './button';

function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield all([
    takeLatest(type.FETCH_ALL_IMAGES, loadAllImages),
    takeLatest(type.SEARCH_CRITERIA, loadImagesByCriteria),
    takeEvery(type.ADD_ITEM, buttonColorChange),
    takeEvery(type.REMOVE_ITEM, buttonColorChange)
    ]);
}

export default rootSaga;