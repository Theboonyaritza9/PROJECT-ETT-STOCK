import React from 'react'
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import Input from '../../shared/components/FormElements/Input2';
import SelectTag from '../../shared/components/FormElements/SeleteTag';
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./CreateTool.css";

function CreateTool() {

    const apiType = [
        {
            name: "IC",
            value: "1"
        },
        {
            name: "Module",
            value: "2"
        },
        {
            name: "R",
            value: "3"
        },
        {
            name: "C",
            value: "4"
        },
        {
            name: "LM",
            value: "5"
        }
    ]

    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            total: {
                value: '',
                isValid: true
            },
            size: {
                value: '',
                isValid: true
            },
            category: {
                value: '',
                isValid: false
            },
            type: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: true
            },
            image: {
                value: null,
                isValid: true
            }
        },
        false
    );

    // console.log(formState.inputs);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
    }


    return (
        <div className="container-toolForm">
            <h2>Create new tool</h2>
            <form onSubmit={onSubmit}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name."
                    onInput={inputHandler}
                />
                <div className="toolForm-input-flexbox">
                    <SelectTag
                        id="type"
                        label="Type"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid type"
                        onInput={inputHandler} 
                        optionList={apiType}
                        />
                    <Input
                        id="category"
                        element="input"
                        type="text"
                        label="Category"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid category."
                        onInput={inputHandler}
                    />
                </div>
                <div className="toolForm-input-flexbox">
                    <Input
                        id="total"
                        element="input"
                        type="number"
                        label="Total"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid total."
                        onInput={inputHandler}
                        initialValue={0}
                        initialValid={true}
                    />
                    <Input
                        id="size"
                        element="input"
                        type="text"
                        label="size"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid size."
                        onInput={inputHandler}
                        initialValue=""
                        initialValid={true}
                    />
                </div>
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                />
                <Input
                    id="description"
                    element="textarea"
                    label="Description"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid dedcription."
                    onInput={inputHandler}
                    initialValid={true}
                />
                <button className="btn btn-submit btn-full" disabled={!formState.isValid}>Create</button>
            </form>
        </div>
    )
}

export default CreateTool
