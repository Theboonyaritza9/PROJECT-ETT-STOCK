import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemToolAction } from "../../actions/toolAction";
import SliderImages from "../../shared/components/UIElements/SliderImages";


import "./DetailsTool.css"
import "../../shared/components/FormElements/Button.css"

function DetailsTool() {

    const dispatch = useDispatch();
    const toolItem = useSelector(state => state.toolItem);
    const { loading, error, tool } = toolItem;
    const [modeDisplay, setModeDisplay] = useState(false);
    // console.log(modeDisplay)

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
                <button className="btn btn-secondary" onClick={() => setModeDisplay(!modeDisplay)}>Edit</button>
            </div>
            { loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
                    <div className="container-detail">
                        <div>
                            <SliderImages SliderData={tool.images} modeDisplay={modeDisplay} />
                        </div>
                        <div className="box-description" >
                            <h2>{tool.nameTool}</h2>
                            <h3>Tool's Description</h3>
                            <div className="detail">
                                <div className="cover-detail-tool">
                                    {modeDisplay &&
                                        <React.Fragment>
                                            <p>Name</p>
                                            <input type="text" />
                                        </React.Fragment>
                                    }
                                </div>
                                <div className="cover-detail-tool">
                                    <p>Total {!modeDisplay && <span>{tool.total}</span>}</p>
                                    {modeDisplay && <input type="text" />}
                                </div>
                                <div className="cover-detail-tool">
                                    <p>Type {!modeDisplay && <span>{tool.type}</span>}</p>
                                    {modeDisplay && <input type="text" />}
                                </div>
                                <div className="cover-detail-tool">
                                    <p>Category {!modeDisplay && <span>{tool.category}</span>}</p>
                                    {modeDisplay && <input type="text" />}
                                </div>
                                <div className="cover-detail-tool">
                                    <p>Size {!modeDisplay && <span>{tool.size}</span>}</p>
                                    {modeDisplay && <input type="text" />}
                                </div>
                                {!modeDisplay &&
                                    <div className="cover-detail-tool">
                                        <p>Status <span>{tool.status}</span></p>
                                    </div>}
                                <div className="footer-detail">
                                    <p>Description</p>
                                    {!modeDisplay && <p>{tool.description}</p>}
                                    {modeDisplay && <textarea name="text" />}
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
