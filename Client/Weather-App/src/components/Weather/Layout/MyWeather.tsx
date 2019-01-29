import * as React from 'react';
import WeatherProps from '../Data/WeatherProps';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Button, Card, CardContent, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Styles } from 'src/utils/styles';
import WeatherState from '../Data/WeatherState';
import { getWeather } from 'src/gRPC/Client/WeatherClient';
import * as WeatherPb from 'src/gRPC/proto/weather_pb';

class MyWeather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
    
        this.state = {
            id: 0,
            cityName: "",
            tempMax: 0,
            tempMin: 0,
            wind: 0,
            typeWeather: "",
            description: ""
        };
      }

    async componentDidMount() {
        const res =  await getWeather("hakodate");
        const weather: WeatherPb.Weather = await res.result.getWeather();
        this.setState ({
            cityName: "函館",
            tempMax: weather.getTempmax(),
            tempMin: weather.getTempmin(),
            wind: weather.getWind(),
            typeWeather: weather.getType(),
            description: weather.getDescription()
        });
    }

    public render() {
        const classes = this.props.classes;
        return ( 
          <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {this.state.cityName}の天気
                    </Typography>
                    <Button color="inherit" onClick={this.onLogoutSubmit}>Logout</Button>
                </Toolbar>
            </AppBar>

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Today's Weather
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {this.state.typeWeather}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Max Temp
                    </Typography>

                    <Typography variant="h5" component="h2">
                    {this.state.tempMax}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Min Temp
                    </Typography>

                    <Typography variant="h5" component="h2">
                    {this.state.tempMin}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Wind
                    </Typography>

                    <Typography variant="h5" component="h2">
                    {this.state.wind}
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Description
                    </Typography>

                    <Typography variant="h5" component="h2">
                    {this.state.description}
                    </Typography>

                </CardContent>
            </Card>
          </div>
        );
      } 
    
    private onLogoutSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        this.props.goToLogin();
    };
}


export default withStyles(Styles)(MyWeather);