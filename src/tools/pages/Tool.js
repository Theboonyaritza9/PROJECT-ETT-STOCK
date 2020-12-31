import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { listToolAction } from "../../actions/toolAction";
import "./Tool.css";
import "../../shared/components/FormElements/Button.css";
import FilterTool from '../components/FilterTool';
import MobileTool from '../components/MobileTool';
import DesktopTool from '../components/DesktopTool';
import { AuthContext } from "../../shared/context/Auth-Context";

function Tool() {

    const auth = useContext(AuthContext);
    const dispatch = useDispatch();
    const toolsList = useSelector(state => state.toolList);
    const { loading, tools, error } = toolsList;

    useEffect(() => {
        dispatch(listToolAction());
        return () => {
            //
        }
    }, [])

    return (
        <section>
            <div className="section-top">
                <div className="filter-button">
                    <button className="btn btn-secondary" style={{ marginLeft: "10px" }}>Filters</button>
                    {!auth.statusId ? null : <button className="btn btn-success">+New Tool</button>}
                </div>
                <FilterTool />
            </div>
            <div className="section-bottom">
                <MobileTool toolList={tools} />
                <DesktopTool toolList={tools} loading={loading} error={error} />
            </div>

        </section>
    )
}

export default Tool
