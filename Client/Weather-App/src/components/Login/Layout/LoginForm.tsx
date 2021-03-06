import * as React from 'react';
import LoginFormProps from '../Data/LoginFormProps';
import LoginFormState from '../Data/LoginFormState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, FormControl } from '@material-ui/core';
import { Styles } from '../../../utils/styles';

class LoginForm extends React.Component<LoginFormProps,LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
    
        this.state = {
          inputUserId: '',
          inputPassword: ''
        };
    }

    public render() {
        const { classes } = this.props;
        return (
          <div>
            <FormControl>
                <TextField
                    data-test="user-id"
                    label="UserID"
                    value={this.state.inputUserId}
                    onChange={this.onInputUserIDChange}
                    margin="normal"
                />
                <TextField
                    data-test="password"
                    label="Password"
                    value={this.state.inputPassword}
                    onChange={this.onInputPasswordChange}
                    margin="normal"
                />
                <Button 
                    data-test="signIn-button"
                    onClick={this.onFormSubmit}
                    color="primary"
                    className={classes.button}
                >ログイン</Button>
                <Button 
                    data-test="signUp-button"
                    onClick={this.onRegistSubmit}
                    color="secondary"
                    className={classes.button}
                >ユーザ登録</Button>
            </FormControl>
          </div>
        );
      }  
    
    
    private onInputUserIDChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({
            inputUserId: e.currentTarget.value
        });
    }
    
    private onInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({
            inputPassword: e.currentTarget.value
        });
    }

    private onFormSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const {inputUserId, inputPassword} = this.state;
        e.preventDefault();
    
        if ((!this.state.inputUserId.trim()) && (!this.state.inputPassword.trim()) ) {
          return;
        }
        this.props.loginRequest(inputUserId, inputPassword);
        this.props.goToHome();
        
        this.setState({
          inputPassword: '' 
        });
    };

    private onRegistSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        this.props.goToRegist()
    };
}

export default withStyles(Styles)(LoginForm);