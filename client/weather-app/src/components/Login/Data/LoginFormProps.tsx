export interface LoginFormDispatchProps {
    loginRequest: (userId: string, password: string) => void;
    goToHome: () => void;
    goToLogin: () => void;
    goToRegist: () => void;
}

type LoginFormProps = LoginFormDispatchProps;
export default LoginFormProps;