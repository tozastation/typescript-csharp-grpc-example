export interface LoginFormDispatchProps {
    loginRequest: (userId: string, password: string) => void;
}

type LoginFormProps = LoginFormDispatchProps;
export default LoginFormProps;