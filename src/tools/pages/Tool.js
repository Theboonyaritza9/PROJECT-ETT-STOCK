import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { listToolAction } from "../../actions/toolAction";
import "./Tool.css";
import "../../shared/components/FormElements/Button.css";
import FilterTool from '../components/FilterTool';
import MobileTool from '../components/MobileTool';
import DesktopTool from '../components/DesktopTool';
import { AuthContext } from "../../shared/context/Auth-Context";
import { FilterContext } from "../../shared/context/Filter-Context";

function Tool() {

    const auth = useContext(AuthContext);
    const filter = useContext(FilterContext);
    const dispatch = useDispatch();
    const toolsList = useSelector(state => state.toolList);
    const { loading, tools, error } = toolsList;
    const [toolList, setToolList] = useState([]);
    const [toolListBackup, setToolListBackup] = useState([]);

    // console.log(filter.status, " ", filter.type);

    useEffect(() => {
        dispatch(listToolAction());
        if (tools) {
            setToolList(tools)
            setToolListBackup(tools);
        }
        return () => {
            //
        }
    }, [tools, toolListBackup])


    useEffect(() => {
        // Default
        if (filter.status === "1") {
            let newArr = toolListBackup;
            setToolList(toolListBackup)
            for (var r = 0; r < 5; r++) {
                if (filter.type === String(r)) {
                    break
                }
                if (filter.type === String(r + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(r + 1))
                    setToolList(newArr)
                    break
                }
            }
        }
        // Out of Stock
        if (filter.status === "2") {
            let newArr = toolListBackup.filter((prev) => prev.status === "2")
            setToolList(newArr)
            for (var i = 0; i < 5; i++) {
                if (filter.type === String(i)) {
                    break
                }
                if (filter.type === String(i + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(i + 1))
                    setToolList(newArr)
                    break
                }
            }
        }
        // Getting out of Stock
        if (filter.status === "3") {
            let newArr = toolListBackup.filter((prev) => prev.status === "3")
            setToolList(newArr)
            for (var x = 0; x < 5; x++) {
                if (filter.type === String(x)) {
                    break
                }
                if (filter.type === String(x + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(x + 1))
                    setToolList(newArr)
                    break
                }
            }
        }
        return () => {

        }
    }, [filter.status, filter.type])

    return (
        <section>
            <div className="section-top">
                <div className="filter-button">
                    <button className="btn btn-secondary" style={{ marginLeft: "10px" }}>Filters</button>
                    {!auth.statusId ? null : <button className="btn btn-success">+New Tool</button>}
                </div>
                <FilterTool filterFunction={filter.tool} />
            </div>
            <div className="section-bottom">
                <MobileTool toolList={toolList} />
                <DesktopTool toolList={toolList} loading={loading} error={error} />
            </div>

        </section>
    )
}

export default Tool
