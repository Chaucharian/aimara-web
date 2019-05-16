import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}