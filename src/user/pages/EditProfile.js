import React from 'react'
import { Link } from "react-router-dom";
import Input from '../../shared/components/FormElements/Input2';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from "../../shared/hooks/form-hook";
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import "./EditProfile.css";

function EditProfile() {

    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            name: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
            image: {
                value: null,
                isValid: false
            },
        },
        false
    );

    // console.log(formState.inputs)

    // Await connecting with Back-end
    const onSubmit = (e) => {
        const { email, name, password, image } = formState.inputs;
        e.preventDefault();
        const data = {
            email: email.value,
            name: name.value,
            password: password.value,
            image: image.value
        }
        console.log(data);

        // --------- Coding Back-end -----------

    }


    return (
        <div className="container-editProfile">
            <h3 className="header-editProfile">Profile</h3>
            <form onSubmit={onSubmit}>
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                    initialValue="admin@gmail.com"
                    initialValid={true}
                    required
                />
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name."
                    onInput={inputHandler}
                    initialValue="Ruri ichikyo"
                    initialValid={true}
                    required
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Please enter a valid password."
                    onInput={inputHandler}
                    initialValue="123456"
                    initialValid={true}
                    required
                />
                <p>Image</p>
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                    initialValue={"/images/profile.png"}
                    initialValid={true}
                />
                <div className="footer-editProfile">
                    <button type="submit" className="btn btn-submit btn-full" disabled={!formState.isValid}>Save</button>
                    <button type="button" className="btn btn-back btn-full"><Link to="/">Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile
