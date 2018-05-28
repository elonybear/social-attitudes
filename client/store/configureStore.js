import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/root';

export default function configureStore(defaultState) {

  let logger = createLogger({});

  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(logger)
  );

  return store;
}
