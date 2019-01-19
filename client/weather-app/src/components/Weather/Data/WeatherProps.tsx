import { WithStyles } from '@material-ui/core';
import { ClassNames } from 'src/utils/styles';

export interface WeatherDispatchProps {
    goToHome: () => void;
    goToLogin: () => void;
    goToRegist: () => void;
    weatherRequest: (cityName: string) => void;
}

type WeatherProps = WeatherDispatchProps & WithStyles<ClassNames>;
export default WeatherProps;