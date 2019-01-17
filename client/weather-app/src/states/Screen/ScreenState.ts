import { ScreenStateType } from './ScreenStateType';

export default interface ScreenState {
    screenType: ScreenStateType;
    id: number;
    cityName: string;
    tempMax: number;
    tempMin: number;
    wind: number;
    typeWeather: string;
    description: string;
}