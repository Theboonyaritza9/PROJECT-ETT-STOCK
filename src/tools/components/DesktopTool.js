import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";
import Input from "../../shared/components/FormElements/Input2";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";


function DesktopTool(props) {

    const { toolList, loading, error } = props;
    const [showPrompt, setShowPrompt] = useState(false);
    const [name, setName] = useState('');
    const [modePrompt, setModePrompt] = useState(true);

    const [formState, inputHandler ] = useForm(
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
        <div className="desktop">
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
            <table>
                <thead>
                    <tr>
                        <th><h4>Image</h4></th>
                        <th><h4>Name</h4></th>
                        <th><h4>Type</h4></th>
                        <th><h4>Category</h4></th>
                        <th><h4>Size</h4></th>
                        <th><h4>Status</h4></th>
                        <th><h4>Piece</h4></th>
                        <th><h4>Action</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <div>Loading...</div> :
                        error ? <div>{error}</div> :
                            toolList.map((res) => (
                                <tr key={res.id}>
                                    <th><Link to={`/detail/${res.id}`}><img src={res.imageProfile} alt="jpg" /></Link></th>
                                    <th><p>{res.nameTool}</p></th>
                                    <th><p>{res.type}</p></th>
                                    <th><p>{res.size}</p></th>
                                    <th><p>{res.category}</p></th>
                                    <th><p>{res.status}</p></th>
                                    <th><p>{res.total}</p></th>
                                    <th>
                                        <button className="btn btn-submit" onClick={() => openRequestHandler(res.nameTool)}>Request</button>
                                        <button className="btn btn-success" onClick={() => openAddHandler(res.nameTool)}>+Add</button>
                                    </th>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DesktopTool
