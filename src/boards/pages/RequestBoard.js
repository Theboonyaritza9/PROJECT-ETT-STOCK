import React, { useState } from 'react'
import Input from '../../shared/components/FormElements/Input2';
import SelectTag from '../../shared/components/FormElements/SeleteTag';
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./RequestBoard.css"


function RequestBoard() {

    const [boxError, setBoxError] = useState(false);

    const apiType = [
        {
            name: "ETT-SpeedRaider",
            value: "1"
        },
        {
            name: "ETT-TEST-1",
            value: "2"
        },
        {
            name: "ETT-TEST-2",
            value: "3"
        },
        {
            name: "ETT-TEST-3",
            value: "4"
        },
        {
            name: "ETT-TEST-4",
            value: "5"
        }
    ]

    const [formState, inputHandler, setFormData] = useForm(
        {
            board: {
                value: '',
                isValid: false
            },
            total: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: true
            }
        },
        false
    );

    // console.log(formState.inputs);

    const openBoxError = () => {
        setBoxError(true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
    }


    return (
        <div className="container-requestBoardForm">
            <h2>Request Board</h2>
            <form onSubmit={onSubmit}>
                <div className="requestBoardForm-input-flexbox">
                    <SelectTag
                        id="board"
                        label="Board"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid board"
                        onInput={inputHandler}
                        optionList={apiType}
                        required
                    />
                </div>
                <Input
                    id="total"
                    element="input"
                    type="number"
                    label="Total"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid total."
                    onInput={inputHandler}
                    required
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
                <button className="btn btn-warning btn-full" onClick={openBoxError} disabled={!formState.isValid}>Check</button>
                <button className="btn btn-submit btn-full" disabled={!formState.isValid}>Submit</button>

                {boxError && <div className="requestBoardForm-error">
                    <div>
                        <p>LM-2575  </p>
                        <p>required 17</p>
                    </div>
                    <div>
                        <p>IC1001</p>
                        <p>required 5</p>
                    </div>
                    <div>
                        <p>C0.1</p>
                        <p>required 120</p>
                    </div>
                </div>}

            </form>
        </div>
    )
}

export default RequestBoard
