import React, { useReducer, useEffect } from 'react';
import "./Input2.css"

import { validate } from '../../util/validators.js';



// normal Input no CSS
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
};

const SelectTag = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        (
            <select
                className="filter-select"
                id={props.id}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                style={{ width: "100%" }}
            >
                <option defaultValue >-- none --</option>
                {props.optionList.map((res) => (
                    <option value={res.value} key={res.value}>{res.name}</option>
                ))}
            </select>
        )

    return (
        <div
            className={`form-control1 ${!inputState.isValid && inputState.isTouched &&
                'form-control--invalid'}`}
        >
            <p htmlFor={props.id}>{props.label} {props.required && <span style={{ color: "red" }}>*</span>}</p>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};

export default SelectTag;