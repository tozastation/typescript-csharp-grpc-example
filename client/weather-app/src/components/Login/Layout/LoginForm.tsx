import * as React from 'react';
import LoginFormProps from '../Data/LoginFormProps';
import LoginFormState from '../Data/LoginFormState';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class LoginForm extends React.Component<LoginFormProps,LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
    
        this.state = {
          inputUserId: '',
          inputPassword: ''
        };
    }

    public render() {
        return (
          <div>
            <FormControl>
                <TextField
                    label="UserID"
                    value={this.state.inputUserId}
                    onChange={this.onInputUserIDChange}
                    margin="normal"
                />
                <TextField
                    label="Password"
                    value={this.state.inputPassword}
                    onChange={this.onInputPasswordChange}
                    margin="normal"
                />
                <Button onClick={this.onFormSubmit}>ログイン</Button>
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
    
        this.setState({
          inputPassword: '' 
        });
      };
}