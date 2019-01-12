import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
