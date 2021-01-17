import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SliderImages from "../../shared/components/UIElements/SliderImages";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/Auth-Context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./DetailsBoard.css"
import "../../shared/components/FormElements/Button.css"
import DescriptionBoard from '../components/DescriptionBoard';
import TableDetailBoard from '../components/TableDetailBoard';
import { ItemBoardAction } from "../../actions/boardAction";
import { listToolApi } from "../../Api";

library.add(fas);


function DetailsBoards() {

    const auth = useContext(AuthContext)
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardItem);
    const { board, loading, error } = boardList;
    const [modeDisplay, setModeDisplay] = useState(false);
    const [filterType, setFilterType] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterName, setFilterName] = useState([]);
    const [toolTotal, setToolTotal] = useState(0);
    const [showBtnAdd, setShowBtnAdd] = useState(false);
    const [newTools, setNewTools] = useState([]);
    const [tools, setTools] = useState([])

    useEffect(() => {
        dispatch(ItemBoardAction())
        setTools(listToolApi)
        return () => {

        }
    }, [board])

    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            type: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            image: {
                value: null,
                isValid: true
            },
            images: {
                value: null,
                isValid: false
            },
            newImage: {
                value: null,
                isValid: true
            },
            newImages: {
                value: null,
                isValid: true
            },
            tools: {
                value: listToolApi,
                isValid: true
            },
            newTools: {
                value: [],
                isValid: true
            }
        },
        false
    );

    const filterDataType = async (e) => {
        const value = e.target.value;
        let filterData = await tools.filter((res) => res.type === value);
        // filterData = [...filterData, initialApi ]
        setFilterType(filterData)
        setFilterCategory(filterData)
        setShowBtnAdd(false);
        // console.log(filterData); 
    }

    const filterDataCategory = async (e) => {
        const value = e.target.value;
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
        inputHandler("newTools", appendNewdata, true)
        // console.log(data)
    }

    const deleteToolList = (id) => {
        let filterData = newTools.filter((item) => item.id !== id)
        setNewTools(filterData);
        inputHandler("newTools", filterData, true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setModeDisplay(false);
        const { name, type, description, image, images, newImage, newImages, tools } = formState.inputs;
        const data = {
            name: name.value,
            type: type.value,
            description: description.value,
            image: image.value,
            images: images.value,
            newImage: newImage.value,
            newImages: newImages.value,
            tools: tools,
            newTools: formState.inputs.newTools.value
        }
        console.log(data)
    }

    // console.log(formState.inputs)

    return (
        <div className="header-detail">
            { !auth.statusId ? null :
                <div className="box-button">
                    <button className="btn btn-secondary" onClick={() => setModeDisplay(!modeDisplay)}>Edit</button>
                </div>
            }
            <form onSubmit={onSubmit}>
                <div className="container-detail">
                    <SliderImages SliderData={board.images}
                        modeDisplay={modeDisplay}
                        inputHandler={inputHandler}
                        imageProfile={board.imageProfile}
                        isValid={formState.inputs.newImages.isValid} />
                    <DescriptionBoard name={board.nameBoard} des={board.description} type={board.type} modeDisplay={modeDisplay} inputHandler={inputHandler} />
                </div>
                <TableDetailBoard tools={formState.inputs.tools.value} modeDisplay={modeDisplay} onInput={inputHandler} newTools={formState.inputs.tools.value} />

                {modeDisplay && <div className="addTool-createboardform" style={{ width: "300px", background: "#fff" }}>
                    <div className="cover-addTool-createboardform">
                        <div className="form-control1">
                            <p>Type <span style={{ color: "red" }}>*</span></p>
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
                        <p>Tool's name <span style={{ color: "red" }}>*</span></p>
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
                </div>}
                <div>
                    {modeDisplay &&
                        <button type="submit" className="btn btn-success"
                            disabled={!formState.isValid} style={{ marginRight: '1rem' }}
                        >
                            Save
                </button>}
                    <Link to="/boards"><button className="btn btn-back">Back</button></Link>
                </div>
            </form>
        </div>
    )
}

export default DetailsBoards
