//libraries
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

//Components
import SmartBase from './containers/SmartBase';

import configureStore from './store/configureStore';

const store = configureStore(require('./store/defaultStore.json'));

ReactDOM.render(
  <Provider store={store}>
    <SmartBase />
  </Provider>,
  document.getElementById('root')
);
