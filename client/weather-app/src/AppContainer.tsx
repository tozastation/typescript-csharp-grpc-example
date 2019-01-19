import { connect } from 'react-redux';
import App, { AppConnectedProps } from './App';
// import {StateType} from 'typesafe-actions';
// import rootReducers from './reducers';

// //type RootType = StateType<typeof rootReducers>;

const mapStateToProps = (state:any): AppConnectedProps => ({
    screenState: state.ScreenState
})

export default connect(
  mapStateToProps,
  null
)(App);
