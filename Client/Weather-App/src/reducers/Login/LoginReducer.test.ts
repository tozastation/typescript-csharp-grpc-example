import loginState from './LoginReducer'
import * as creators from '../../actions/Login/LoginActionCreator'
import LoginState from '../../states/Login/LoginState'

describe('Login Reducer', () => {
    let initialState: LoginState;

    beforeEach(() => {
        initialState = 
            {
                cityName: "Hakodate"
            }
    });

    test('Be Able to Login Correctly', () => {
        // Success
        const expextedLoginState: LoginState = {
            cityName: "Hakodate"
        };
        // call
        let state: LoginState =  {
            cityName: ""
        }
        state = loginState(state, creators.loginSucceed(initialState.cityName));
        expect(state).toEqual(expextedLoginState)
    });

    test('Can Not Be Able to Login Correctly', () => {
        // Success
        const expextedLoginState: LoginState = {
            cityName: ""
        };
        // call
        let state: LoginState =  {
            cityName: ""
        }
        state = loginState(state, creators.loginFailed());
        expect(state).toEqual(expextedLoginState)
    });
});
