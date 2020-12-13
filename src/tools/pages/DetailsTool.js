import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemToolAction } from "../../actions/toolAction";
import SliderImages from "../../shared/components/UIElements/SliderImages";
import { SliderData } from "../../shared/components/UIElements/SlideData";

import "./DetailsTool.css"
import "../../shared/components/FormElements/Button.css"

function DetailsTool() {

    const dispatch = useDispatch();
    const toolItem = useSelector(state => state.toolItem);
    const { loading, error, tool } = toolItem;

    // console.log(tool.images[0])

    useEffect(() => {
        dispatch(ItemToolAction());
        return () => {
            //
        }
    }, [])

    return (
        <div className="header-detail">
            <div className="box-button">
                <button className="btn btn-secondary">Edit</button>
            </div>
            { loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    <div className="container-detail">
                        <div>
                            <SliderImages SliderData={tool.images} />
                        </div>
                        <div className="box-description" >
                            <h2>{tool.nameTool}</h2>
                            <h3>Tool's Description</h3>
                            <div className="detail">
                                <p>Total <span>{tool.total}</span></p>
                                <p>Type <span>{tool.type}</span></p>
                                <p>Category <span>{tool.category}</span></p>
                                <p>Size <span>{tool.size}</span></p>
                                <p>Status <span>{tool.status}</span></p>
                                <div className="footer-detail">
                                    <p>Description</p>
                                    <p>{tool.description}</p>
                                </div>
                                <Link to="/"><button className="btn btn-back">Back</button></Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default DetailsTool
