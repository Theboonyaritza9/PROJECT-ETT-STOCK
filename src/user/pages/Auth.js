import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";

import "./Auth.css"

function Auth() {

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
            // name: {
            //     value: '',
            //     isValid: false
            // }
        },
        false
    );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };



    return (
        <div className="section">
            <div className="register">
                <div className="picture">
                    <img src='https://lh3.googleusercontent.com/proxy/6qnH-JQY4P3lqFMcbNOr-vS3AUPoBwFPWHrMp3AwprRNcmkP3MCz7dglqkO-uWLPs8m_UdTGH8uC8FoCy076F0YzkHnzbw6PkqUe7DjuFaaQEgWpi-xq' alt="png" />
                </div>
                { isLoginMode ? <h3>Login</h3> : <h3>Register</h3>}
                {/* <h3>Username</h3>
                <input type="text" placeholder="Enter username" />
                <h3>Password</h3>
                <input type="password" placeholder="********" />
                <h3>Name</h3>
                <input type="text" placeholder="Enter name" />
                <br />
                <button><a href="#">Register</a></button> */}
                <Input
                    element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address."
                    onInput={inputHandler}
                />
                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Please enter a valid password, at least 6 characters."
                    onInput={inputHandler}
                />
                { !isLoginMode && <Input
                    element="input"
                    id="name"
                    type="text"
                    label="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name, at least 1."
                    onInput={inputHandler}
                />}
                <Button type="submit" buttonStyle="btn btn-success btn-full" disabled={!formState.isValid}>{ isLoginMode ? 'Login' : 'Register '}</Button>
                <p className="linkAuth" onClick={switchModeHandler}>{ isLoginMode ? 'Have registered yet ?' : 'Login now '}</p>
            </div>
        </div>
    )
}

export default Auth