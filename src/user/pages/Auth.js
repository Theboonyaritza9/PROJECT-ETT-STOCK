import React, { useState } from 'react';
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";

import "./Auth.css";
import "../../shared/components/FormElements/Button.css"

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
        <React.Fragment>
            <div className="section">
                <div className="register">
                    <div className="picture">
                        <img src="/images/profile.png"  alt="555" />
                    </div>
                    <div className="headerAuth">
                        {isLoginMode ? <h3>Login</h3> : <h3>Register</h3>}
                    </div>
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
                    {!isLoginMode && <Input
                        element="input"
                        id="name"
                        type="text"
                        label="name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name, at least 1."
                        onInput={inputHandler}
                    />}
                    <button type="submit" className="btn btn-success btn-full" disabled={!formState.isValid}>{isLoginMode ? 'Login' : 'Register '}</button>
                    <p className="linkAuth" onClick={switchModeHandler}>{isLoginMode ? 'Have registered yet ?' : 'Login now '}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Auth
