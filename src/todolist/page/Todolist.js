import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listToolAction } from "../../actions/todoAction";
import Modal from "../../shared/components/UIElements/Modal";
import Input from "../../shared/components/FormElements/Input2";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/Auth-Context";

import "./Todolist.css"

function Todolist() {

    const auth = useContext(AuthContext);
    const dispatch = useDispatch();
    const todolist = useSelector((res) => res.todoList);
    const { todos, loading, error } = todolist;
    const [showPrompt, setShowPrompt] = useState(false);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [modePrompt, setModePrompt] = useState(true);
    // console.log(todos)

    useEffect(() => {
        dispatch(listToolAction())
        return () => {
            //
        }
    }, [])



    const [formState, inputHandler] = useForm(
        {
            header: {
                value: '',
                isValid: false
            },
            status: {
                value: '',
                isValid: false
            },
            deadline: {
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
        setShowPrompt(false);
        setName('');
        setStatus('');
        setDescription('');
    }

    const openEditHandler = (res) => {
        setName(res.header);
        setStatus(res.status);
        setDescription(res.description);
        setShowPrompt(true)
        setModePrompt(true);
    }

    const openAddHandler = () => {
        setShowPrompt(true)
        setModePrompt(false);
    }

    const handleRequestForm = (e) => {
        e.preventDefault();
        setShowPrompt(false);
        setName('');
        setStatus('');
        setDescription('');

        const { header, status, deadline, description } = formState.inputs;
        const data = {
            header: header.value,
            status: status.value,
            deadline: deadline.value,
            description: description.value
        }
        console.log(data);
        // console.log("success request: " + formState.inputs.total.value)
    }

    return (
        <React.Fragment>
            { loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    <div className="container-todo">
                        <Modal
                            show={showPrompt}
                            onCancel={cancelRequestHandler}
                            header={`${modePrompt ? 'Edit' : 'Add TodoList'} `}
                            footerClass="place-item__modal-actions"
                            onSubmit={handleRequestForm}
                        >
                            <div className="prompt-request">
                                <Input
                                    id="header"
                                    element="input"
                                    type="text"
                                    label="Header"
                                    errorText="Please enter a valid Header."
                                    validators={[VALIDATOR_MINLENGTH(1)]}
                                    onInput={inputHandler}
                                    initialValue={name}
                                    initialValid={true}
                                    required
                                />
                                <Input
                                    id="status"
                                    element="input"
                                    type="text"
                                    label="Status"
                                    errorText="Please enter a valid Status."
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    initialValue={status}
                                    initialValid={true}
                                />
                                <Input
                                    id="deadline"
                                    element="input"
                                    type="date"
                                    label="Deadline"
                                    errorText="Please enter a valid Deadline."
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    required
                                />
                                <Input
                                    id="description"
                                    element="input"
                                    type="text"
                                    label="Description"
                                    errorText="Please enter a valid description."
                                    onInput={inputHandler}
                                    validators={[VALIDATOR_REQUIRE()]}
                                    initialValue={description}
                                    initialValid={true}

                                />
                                <div>
                                    <button type="submit" disabled={!formState.isValid} className="btn btn-submit" style={{ marginRight: "12px" }}>submit</button>
                                    <button type="button" onClick={cancelRequestHandler} className="btn btn-danger">cancel</button>
                                </div>
                            </div>
                        </Modal>
                        <div className="title-todo">
                            <h3>TodoList</h3>
                        </div>
                        {!auth.statusId ? null :
                            <div className="add-todo">
                                <button className="btn btn-success" onClick={openAddHandler}>+ New TodoList</button>
                            </div>}
                        {todos.map(res => (
                            <div className="todo" key={res.id}>
                                <div className="header-todo">
                                    <div className="header-profile">
                                        <img src="/images/profile.png" alt="555" />
                                    </div>
                                    <div className="header-profile-des">
                                        <p>{res.name}</p>
                                        <p>{res.date}</p>
                                    </div>
                                </div>
                                <div className="content-todo">
                                    <div className="content-text">
                                        <p>Header</p>
                                        <p>{res.header}</p>
                                    </div>
                                    <div className="content-text">
                                        <p>Status</p>
                                        <p>{res.status}</p>
                                    </div>
                                    <div className="content-text">
                                        <p>Deadline</p>
                                        <p>{res.deadline}</p>
                                    </div>
                                    <div className="content-text">
                                        <p>Description</p>
                                        <p>{res.description}</p>
                                    </div>
                                </div>
                                { !auth.statusId ? null :
                                    <div className="footer-todo">
                                        <button className="btn btn-secondary btn-full"
                                            onClick={() => openEditHandler(res)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-full">Delete</button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div >
            }
        </React.Fragment>
    )

}

export default Todolist
