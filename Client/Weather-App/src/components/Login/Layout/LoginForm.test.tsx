import * as React from 'react';
import * as enzyme from 'enzyme';
import LoginForm from './LoginForm';
import * as Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';

enzyme.configure({ adapter: new Adapter() });

describe('LoginForm', () => {
    const loginRequestSpy = jest.fn();
    const goToHomeSpy = jest.fn();
    const goToLoginSpy = jest.fn();
    const goToRegistSpy = jest.fn();
    // let shallow = createShallow();
    // type returnType = ReturnType<typeof shallow>
    // let mount = createMount();
    // let wrapper: returnType;
    let wrapper: enzyme.ShallowWrapper;
    let wrapperMount: any;
    const sel = (id:string) => `[data-test="${id}"]`

    beforeEach(() => {
        wrapper = enzyme.shallow(<LoginForm  
            loginRequest={loginRequestSpy} 
            goToHome={goToHomeSpy}
            goToLogin={goToLoginSpy}
            goToRegist={goToRegistSpy}
            />);
    });

    describe('Login Button', () => {
        
        test('Check Matarial', () => {
            wrapperMount =  enzyme.mount(<LoginForm  
                loginRequest={loginRequestSpy} 
                goToHome={goToHomeSpy}
                goToLogin={goToLoginSpy}
                goToRegist={goToRegistSpy}
                />);
            expect(wrapperMount.find(Button).length).toBe(2)
        });

        // test('SignIn Button is Exist', () => {
        //     wrapper = mount(<LoginForm  
        //         loginRequest={loginRequestSpy} 
        //         goToHome={goToHomeSpy}
        //         goToLogin={goToLoginSpy}
        //         goToRegist={goToRegistSpy}
        //         />);
        //     expect(wrapper.find('StyleLabel[label="UserID"]').length).toBe(1)
        // });

        test('SignUp Button is Exist', () => {
            let mount = enzyme.mount(<LoginForm  
                loginRequest={loginRequestSpy} 
                goToHome={goToHomeSpy}
                goToLogin={goToLoginSpy}
                goToRegist={goToRegistSpy}
            />);
            expect(mount.find(sel('signUp-button')).length).toBe(1)
        });

        test('SignIn Button Text is ログイン', () => {
            expect(wrapper.find(sel('signIn-button')).text()).toEqual('ログイン');
        });

        test('SignUp Button Text is ユーザ登録', () => {
            expect(wrapper.find(sel('signUp-button')).text()).toEqual('ユーザ登録');
        });

        test('Check User ID Field', () => {
            const userIdExpected = 'tozastation';
            wrapper.find(sel('user-id')).simulate('change', {target: {value: 'tozastation'}});
            expect(wrapper.find(sel('user-id')).text()).toEqual(userIdExpected);
        });

        test('Check Password Field', () => {
            const password = 'test@1234';
            wrapper.find(sel('password')).simulate('change', {target: {value: 'test@1234'}});
            expect(wrapper.find(sel('password')).text()).toEqual(password);
        });

        test('When Your Push The Button Fire LoginRequest After Inputting Textinput Field', () => {
            const userIdExpected = 'tozastation';
            const password = 'test@1234';
            // ボタンを押す
            wrapper.find('signIn-button').simulate('submit');
            // 発火する
            expect(loginRequestSpy).toHaveBeenCalledTimes(1);
            expect(loginRequestSpy).toHaveBeenCalledWith(userIdExpected, password);
        });
    });
});