import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemToolAction } from "../../actions/toolAction";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input2";
import SliderImages from "../../shared/components/UIElements/SliderImages";


import "./DetailsTool.css"
import "../../shared/components/FormElements/Button.css"

function DetailsTool() {

    const dispatch = useDispatch();
    const toolItem = useSelector(state => state.toolItem);
    const { loading, error, tool } = toolItem;
    const [modeDisplay, setModeDisplay] = useState(false);
    const { nameTool, type, category, size, total, description, imageProfile, id, images, status } = tool;


    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            total: {
                value: '',
                isValid: false
            },
            size: {
                value: '',
                isValid: false
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
                isValid: false
            },
            image: {
                value: null,
                isValid: false
            },
            images: {
                value: null,
                isValid: false
            },
            newImages: {
                value: null,
                isValid: false
            },
        },
        false
    );

    // console.log(formState.inputs.newImages.value)

    useEffect(() => {
        dispatch(ItemToolAction());
        // console.log('work')
        return () => {
            //
        }
    }, [tool])

    // console.log(formState.inputs.newImages.value)


    const testText = () => {
        // setTotal(e.target.value);
        console.log(total);
    }

    const handleSave = (e) => {
        setModeDisplay(false)
        // console.log(formState.inputs);
        const data = {
            id: id,
            nameTool: formState.inputs.name.value,
            total: formState.inputs.total.value,
            type: formState.inputs.type.value,
            category: formState.inputs.category.value,
            size: formState.inputs.size.value,
            description: formState.inputs.description.value,
            images: formState.inputs.images.value,
            newImages: formState.inputs.newImages.value,
            imageProfile: formState.inputs.image.value,
            statue: status
        }
        console.log(data);
        // dispatch(SaveItemToolAction(data))
    }

    return (
        <div className="header-detail">
            <div className="box-button">
                <button className="btn btn-secondary" onClick={() => setModeDisplay(!modeDisplay)}>Edit</button>
            </div>
            { loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    <div className="container-detail">
                        <div>
                            <SliderImages
                                SliderData={images}
                                modeDisplay={modeDisplay}
                                inputHandler={inputHandler}
                                imageProfile={imageProfile}
                                introImages={formState.inputs.newImages.value}

                            />
                        </div>
                        <div className="box-description" >
                            <h2>{nameTool}</h2>
                            <h3>Tool's Description</h3>
                            <div className="detail">
                                <div className="cover-detail-tool">
                                    {modeDisplay && <Input
                                        id="name"
                                        element="input"
                                        type="text"
                                        label="Name"
                                        validators={[VALIDATOR_MINLENGTH(3)]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={nameTool}
                                        initialValid={true}
                                    />

                                    }
                                </div>
                                <div className="cover-detail-tool">
                                    {!modeDisplay && <p>Total <span>{total}</span></p>}
                                    {modeDisplay && <Input
                                        id="total"
                                        element="input"
                                        type="text"
                                        label="Total"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={total}
                                        initialValid={true}
                                    />}
                                </div>
                                <div className="cover-detail-tool">
                                    {!modeDisplay && <p>Type <span>{type}</span></p>}
                                    {modeDisplay && <Input
                                        id="type"
                                        element="input"
                                        type="text"
                                        label="Type"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={type}
                                        initialValid={true}
                                    />}
                                </div>
                                <div className="cover-detail-tool">
                                    {!modeDisplay && <p>Category <span>{category}</span></p>}
                                    {modeDisplay && <Input
                                        id="category"
                                        element="input"
                                        type="text"
                                        label="Category"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={category}
                                        initialValid={true}
                                    />}
                                </div>
                                <div className="cover-detail-tool">
                                    {!modeDisplay && <p>Size <span>{size}</span></p>}
                                    {modeDisplay && <Input
                                        id="size"
                                        element="input"
                                        type="text"
                                        label="Size"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={size}
                                        initialValid={true}
                                    />}
                                </div>
                                {!modeDisplay &&
                                    <div className="cover-detail-tool">
                                        <p>Status <span>{status}</span></p>
                                    </div>}
                                <div className="footer-detail">
                                    {!modeDisplay && <p>Description</p>}
                                    {!modeDisplay && <p>{description}</p>}
                                    {modeDisplay && <Input
                                        id="description"
                                        element="textarea"
                                        label="Description"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid title."
                                        onInput={inputHandler}
                                        initialValue={description}
                                        initialValid={true}
                                    />}
                                </div>
                                <div>
                                    {modeDisplay &&
                                        <button className="btn btn-success"
                                            disabled={!formState.isValid} style={{ marginRight: '1rem' }}
                                            onClick={handleSave}>
                                            Save
                                        </button>}
                                    <Link to="/"><button className="btn btn-back">Back</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default DetailsTool
