import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Modal from "../../shared/components/UIElements/Modal";
import Input from "../../shared/components/FormElements/Input2";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/Auth-Context";


function MobileTool(props) {

    const toolList = props.toolList;
    const auth = useContext(AuthContext);
    const [showPrompt, setShowPrompt] = useState(false);
    const [name, setName] = useState('');
    const [modePrompt, setModePrompt] = useState(true);

    const [formState, inputHandler] = useForm(
        {
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

    const cancelRequestHandler = () => {
        setShowPrompt(false)
    }

    const openRequestHandler = (name) => {
        setName(name);
        setShowPrompt(true)
        setModePrompt(true);
    }

    const openAddHandler = (name) => {
        setName(name);
        setShowPrompt(true)
        setModePrompt(false);
    }

    const handleRequestForm = (e) => {
        e.preventDefault();
        setShowPrompt(false);
        // console.log("success request: " + formState.inputs.total.value)
    }

    return (
        <React.Fragment>
            <Modal
                show={showPrompt}
                onCancel={cancelRequestHandler}
                header={`${modePrompt ? 'Request' : 'Add'} ${name}`}
                footerClass="place-item__modal-actions"
                onSubmit={handleRequestForm}
            >
                <div className="prompt-request">
                    <Input
                        id="total"
                        element="input"
                        type="text"
                        label="Total"
                        errorText="Please enter a valid Tool."
                        validators={[VALIDATOR_MINLENGTH(1)]}
                        onInput={inputHandler}
                    />
                    <Input
                        id="description"
                        element="input"
                        type="text"
                        label="Description"
                        errorText="Please enter a valid description."
                        onInput={inputHandler}
                        validators={[VALIDATOR_REQUIRE()]}

                    />
                    <div>
                        <button type="submit" disabled={!formState.isValid} className="btn btn-submit" style={{ marginRight: "12px" }}>submit</button>
                        <button type="button" onClick={cancelRequestHandler} className="btn btn-danger">cancel</button>
                    </div>
                </div>
            </Modal>
            {toolList.map((res) => (
                <div className="mobile" key={res.id}>
                    <Link to={`detail/${res.id}`}><img src={res.imageProfile} alt="jpg" /></Link>
                    <h3>{res.nameTool}</h3>
                    <div className="mobile-content">
                        <div className="left">
                            <h4>Type</h4>
                            <h4>Status</h4>
                            <h4>Piece</h4>
                        </div>
                        <div className="righ">
                            <p>{res.type}</p>
                            <p>{res.status}</p>
                            <p>{res.total}</p>
                        </div>
                    </div>
                    <div className="mobile-button">
                        <button className="btn btn-submit btn-full" onClick={() => openRequestHandler(res.nameTool)}>Request</button>
                        { !auth.statusId ? null :<button className="btn btn-success btn-full" onClick={() => openAddHandler(res.nameTool)}>+Add</button> }
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default MobileTool
