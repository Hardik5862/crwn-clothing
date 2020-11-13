import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("passwods don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        label="Name"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                      />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                      />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                      />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                      />

                    <div className="buttons">
                        <CustomButton type="Submit">Sign Up</CustomButton>
                    </div>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;