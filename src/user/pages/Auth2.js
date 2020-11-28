import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import "./Auth2.css";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";

function Auth2() {

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
            name: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const switchModeHandler = () => {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    image: {
                        value: null,
                        isValid: false
                    }
                },
                false
            );
            console.log(formState.isValid)
        }
        // setIsLoginMode(prevMode => !prevMode);


    return (
        <div className="box">
            <form>
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
                <Input
                    element="input"
                    id="name"
                    type="name"
                    label="name"
                    validators={[VALIDATOR_MINLENGTH(1)]}
                    errorText="Please enter a valid name, at least 1."
                    onInput={inputHandler}
                />
                <Button type="submit" buttonStyle="btn btn-success btn-full" disabled={!formState.isValid}>Login</Button>
            </form>
            <Button type="button" buttonStyle="btn btn-secondary" onClick={switchModeHandler}>Login</Button>
        </div>
    )
}

export default Auth2
