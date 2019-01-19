import * as React from 'react';
import WeatherProps from '../Data/WeatherProps';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Button, Card, CardContent, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Styles } from 'src/utils/styles';

class MyWeather extends React.Component<WeatherProps> {
    componentDidMount() {
        this.props.weatherRequest("Hakodate")
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
                        の天気
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
                       あああ
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Max Temp
                    </Typography>

                    <Typography variant="h5" component="h2">
                        あああ
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Min Temp
                    </Typography>

                    <Typography variant="h5" component="h2">
                        あああ
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Wind
                    </Typography>

                    <Typography variant="h5" component="h2">
                        あああ
                    </Typography>

                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Description
                    </Typography>

                    <Typography variant="h5" component="h2">
                        あああ
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