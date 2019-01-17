import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ScreenStateType } from './states/Screen/ScreenStateType';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App screenState={{screenType: ScreenStateType.LOGIN_SCREEN}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
