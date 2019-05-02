import { takeLatest, takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
//import FETCH_ALL_IMAGES from '../actions/types';

function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield [
//   takeLatest(FETCH_ALL_IMAGES, loadImages)
    ];
}

export default rootSaga;