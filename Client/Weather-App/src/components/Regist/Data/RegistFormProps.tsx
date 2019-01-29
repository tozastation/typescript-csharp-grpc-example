export interface RegistFormDispatchProps {
    registRequest: (userId: string, password: string, cityName: string, name: string) => void;
    goToHome: () => void;
    goToLogin: () => void;
    goToRegist: () => void;
}

type RegistFormProps = RegistFormDispatchProps;
export default RegistFormProps;