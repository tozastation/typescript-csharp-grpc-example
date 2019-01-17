import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
// create the saga middleware

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
