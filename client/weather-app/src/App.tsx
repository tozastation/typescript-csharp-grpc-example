import * as React from 'react';
import './App.css';
import ScreenState from './states/Screen/ScreenState';
import { ScreenStateType } from './states/Screen/ScreenStateType';
import LoginForm from './containers/Login/LoginForm';

export interface AppConnectedProps {
  screenState: ScreenState
}

class App extends React.Component<AppConnectedProps> {
  public render() {
    const {screenState} = this.props;
    return (
      <div>
        {
          screenState.screenType === ScreenStateType.LOGIN_SCREEN &&
          <LoginForm /> 
        }
      </div>
    );
  }
}

export default App;
