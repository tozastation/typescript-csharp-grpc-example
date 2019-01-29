import { WithStyles } from '@material-ui/core';
import { ClassNames } from 'src/utils/styles';

export interface LoginFormDispatchProps {
    loginRequest: (userId: string, password: string) => void;
    goToHome: () => void;
    goToLogin: () => void;
    goToRegist: () => void;
}

type LoginFormProps = LoginFormDispatchProps & WithStyles<ClassNames>;
export default LoginFormProps;