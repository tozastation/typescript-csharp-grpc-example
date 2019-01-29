import * as React from 'react';
import './App.css';
import ScreenState from './states/Screen/ScreenState';
import { ScreenStateType } from './states/Screen/ScreenStateType';
import LoginForm from './containers/Login/LoginForm';
import RegistForm from './containers/Regist/RegistForm';
import MyWeather from './containers/Weather/MyWeather';

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
        {
          screenState.screenType === ScreenStateType.REGIST_SCREEN &&
          <RegistForm /> 
        }
        {
          screenState.screenType === ScreenStateType.HOME_SCREEN &&
          <MyWeather /> 
        }
      </div>
    );
  }
}

export default App;
