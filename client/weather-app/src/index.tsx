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
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middleware = [sagaMiddleware, logger];

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middleware))
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
