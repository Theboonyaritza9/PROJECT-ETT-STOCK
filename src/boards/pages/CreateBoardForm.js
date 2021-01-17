import React, { useState, useEffect } from 'react';

import Input from '../../shared/components/FormElements/Input2';
// import SelectTag from '../../shared/components/FormElements/SeleteTag';
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { listToolApi } from "../../Api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./CreateBoardForm.css";
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

library.add(fas);

function CreateBoardForm() {

    const [tools, setTools] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterName, setFilterName] = useState([]);
    const [toolTotal, setToolTotal] = useState(0);
    const [showBtnAdd, setShowBtnAdd] = useState(false);
    const [newTools, setNewTools] = useState([]);


    useEffect(() => {
        setTools(listToolApi)
        return () => {
        }
    }, [])

    // console.log(tools)
    // console.log(filterType)

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            size: {
                value: '',
                isValid: true
            },
            type: {
                value: '',
                isValid: true
            },
            description: {
                value: '',
                isValid: true
            },
            image: {
                value: null,
                isValid: true
            },
            tools: {
                value: [],
                isValid: true
            }
        },
        false
    );


    const filterDataType = async (e) => {
        const value = e.target.value;
        let filterData = await tools.filter((res) => res.type === value);
        setFilterType(filterData)
        setFilterCategory(filterData)
        setShowBtnAdd(false);
        // console.log(filterData); 
    }

    const filterDataCategory = async (e) => {
        const value = e.target.value;
        // console.log(value)
        let filterData = await filterType.filter((res) => res.category === value);
        setFilterCategory(filterData)
        setShowBtnAdd(false);
        // console.log(filterData);
    }

    const filterDataName = async (e) => {
        const value = e.target.value;
        let filterData = await filterCategory.filter((res) => res.nameTool === value);
        setFilterName(filterData);
        setShowBtnAdd(true);
    }

    const toolSelected = async () => {
        const { nameTool, type, imageProfile, size, id } = filterName[0];
        const data = {
            id,
            nameTool,
            type,
            imageProfile,
            size,
            toolTotal: toolTotal
        }

        let appendNewdata = await [...newTools, data]
        setShowBtnAdd(false);
        setFilterCategory([]);
        setFilterName([]);
        setToolTotal(0);
        setNewTools(appendNewdata);
        // console.log(data)
    }

    const deleteToolList = (id) => {
        let filterData = newTools.filter((item) => item.id !== id)
        setNewTools(filterData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let data = {
            name : formState.inputs.name.value,
            tools: newTools,
            image : formState.inputs.image.value,
            type: formState.inputs.type.value,
            description : formState.inputs.description.value
        }
        console.log(data)

        // ---------- Coding Back-end ---------------

    }

    // console.log(filterType);
    // console.log(formState.inputs);

    return (
        <div className="container-createboardform">
            <h2>Create new Board</h2>
            <form onSubmit={onSubmit}>
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name."
                    onInput={inputHandler}
                    required
                />
                <h4>Required Tool</h4>
                <div className="addTool-createboardform">
                    <div className="cover-addTool-createboardform">
                        <div className="form-control1">
                            <p>Type <span style={{color: "red"}}>*</span></p>
                            <select onChange={filterDataType} className="filter-select" style={{ width: "100%" }}>
                                <option value="0">Default</option>
                                <option value="1">IC</option>
                                <option value="2">Module</option>
                                <option value="3">R</option>
                                <option value="4">C</option>
                                <option value="5">LM</option>
                            </select>
                        </div>
                        <div className="form-control1">
                            <p>Category</p>
                            <select onChange={filterDataCategory} className="filter-select" style={{ width: "100%" }}>
                                {filterCategory.length === 0 ?
                                    <option>---</option> :
                                    <React.Fragment>
                                        <option>---</option>
                                        {filterCategory.map((res) => <option value={res.category} key={res.id}>{res.category}</option>)}
                                    </React.Fragment>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-control1">
                        <p>Tool's name <span style={{color: "red"}}>*</span></p>
                        <select className="filter-select" onChange={filterDataName} style={{ width: "100%" }}>
                            {filterCategory.length === 0 ?
                                <option>---</option> :
                                <React.Fragment>
                                    <option>---</option>
                                    {filterCategory.map((res) => <option value={res.nameTool} key={res.id}>{res.nameTool}</option>)}
                                </React.Fragment>
                            }
                        </select>
                    </div>
                    {/* <div className="cover-addTool-createboardform"> */}
                    <div className="form-control1">
                        <p>Total</p>
                        <input type="number" value={toolTotal === 0 ? "" : toolTotal} onChange={(e) => setToolTotal(e.target.value)} />
                    </div>
                    {/* <Input
                            id="toolSize"
                            element="input"
                            type="text"
                            label="Size"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid size."
                            onInput={inputHandler}
                            initialValue=""
                            initialValid={true}
                        /> */}
                    {/* </div> */}
                    <button type="button" className="btn btn-success" onClick={toolSelected} disabled={showBtnAdd ? false : true}>add</button>
                    <hr />
                    <div className="selectedTool-createboardform">
                        <h4>Selected tools</h4>
                        <table className="table-createboardform">
                            <thead>
                                <tr className="tr-header-createboardform" >
                                    <th>Tool's name</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newTools.length === 0 ?
                                    null :
                                    newTools.map((item) => (
                                        <tr className="tr-header-createboardform" key={item.id}>
                                            <th>{item.nameTool}</th>
                                            <th>{item.toolTotal}</th>
                                            <th>
                                                <FontAwesomeIcon
                                                    icon={['fas', 'trash-alt']}
                                                    size="1x"
                                                    style={{ color: 'red', cursor: "pointer" }}
                                                    onClick={() => deleteToolList(item.id)} />
                                            </th>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <h4>Profile Image</h4>
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                    initialValid={true}
                />
                <Input
                    id="type"
                    element="input"
                    type="text"
                    label="Type of Board"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Type of Project."
                    onInput={inputHandler}
                    initialValue=""
                    initialValid={true}
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
        </div >
    )
}

export default CreateBoardForm
