import React from 'react';
import Input from "../../shared/components/FormElements/Input2";
import { VALIDATOR_MINLENGTH } from "../../shared/util/validators";

function DescriptionBoard(props) {

    const { name, des, type, modeDisplay, inputHandler } = props

    if (!name) {
        return <div>Loading...</div>
    }

    return (
        <div className="box-description" >
            <h2>{name}</h2>
            <h3>Board's Description</h3>
            <div className="detail">
                {!modeDisplay && <p>Kind of work <span>{type}</span></p>}
                {modeDisplay && <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_MINLENGTH(1)]}
                    errorText="Please enter a valid Name."
                    onInput={inputHandler}
                    initialValue={name}
                    initialValid={true}
                />
                }
                {modeDisplay && <Input
                    id="type"
                    element="input"
                    type="text"
                    label="Kind of work"
                    validators={[VALIDATOR_MINLENGTH(1)]}
                    errorText="Please enter a valid Type."
                    onInput={inputHandler}
                    initialValue={type}
                    initialValid={true}
                />
                }
                <div className="footer-detail">
                    {!modeDisplay && <p>Description</p>}
                    {!modeDisplay && <p>{des}</p>}
                    {modeDisplay && <Input
                        id="description"
                        element="textarea"
                        type="text"
                        label="Description"
                        validators={[VALIDATOR_MINLENGTH(1)]}
                        errorText="Please enter a valid Description."
                        onInput={inputHandler}
                        initialValue={des}
                        initialValid={true}
                    />
                    }
                </div>
            </div>
        </div>
    )
}

export default DescriptionBoard
