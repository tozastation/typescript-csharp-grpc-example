import * as React from 'react';
import RegistFormProps from '../Data/RegistFormProps';
import RegistFormState from '../Data/RegistFormState';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class RegistForm extends React.Component<RegistFormProps, RegistFormState> {
    constructor(props: RegistFormProps) {
        super(props);
    
        this.state = {
          inputUserId: '',
          inputPassword: '',
          inputCityName: '',
          inputName: ''
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
                <TextField
                    label="CityName"
                    value={this.state.inputCityName}
                    onChange={this.onInputCityNameChange}
                    margin="normal"
                />
                <TextField
                    label="Name"
                    value={this.state.inputName}
                    onChange={this.onInputNameChange}
                    margin="normal"
                />
                <Button onClick={this.onFormSubmit}>Regist</Button>
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

    private onInputCityNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({
            inputCityName: e.currentTarget.value
        });
    }

    private onInputNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({
            inputName: e.currentTarget.value
        });
    }

    private onFormSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const {inputUserId, inputPassword, inputCityName, inputName} = this.state;
        e.preventDefault();
    
        if (
            (!this.state.inputUserId.trim()) && 
            (!this.state.inputPassword.trim())  && 
            (!this.state.inputCityName.trim()) &&
            (!this.state.inputName.trim())
        ){
          return;
        }
    
        this.props.registRequest(inputUserId, inputPassword, inputCityName, inputName);
    
        this.setState({
          inputPassword: '' 
        });
      };
}