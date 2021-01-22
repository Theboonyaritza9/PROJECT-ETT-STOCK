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
import Pagination from '../../shared/components/UIElements/Pagination';

function Tool() {

    const auth = useContext(AuthContext);
    const filter = useContext(FilterContext);
    const dispatch = useDispatch();
    const toolsList = useSelector(state => state.toolList);
    const { loading, tools, error } = toolsList;
    const [toolList, setToolList] = useState([]);
    const [toolListBackup, setToolListBackup] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [currentPosts, setCurrentPosts] = useState([])


    // console.log(filter.status, " ", filter.type);


    useEffect(() => {
        dispatch(listToolAction());
        if (tools) {
            // 1 * 10
            const indexOfLastPost = currentPage * postsPerPage;
            // 10 - 10 = 0
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const filterCurrentPosts = tools.slice(indexOfFirstPost, indexOfLastPost);
            setToolList(tools)
            setToolListBackup(tools);
            setCurrentPosts(filterCurrentPosts);
        }

        return () => {
            //
        }
    }, [tools, toolListBackup, currentPage])

    // console.log(currentPosts)

    useEffect(() => {
        if (filter.status === "1") {
            let newArr = toolListBackup;
            setToolList(toolListBackup);
            setCurrentPosts(newArr);
            setCurrentPage(1);

            // Check type (C, R, MODULE, IC)
            for (var r = 0; r < 5; r++) {
                // set default
                if (filter.type === String(r)) {
                    break
                }
                if (filter.type === String(r + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(r + 1))
                    setToolList(newArr)
                    setCurrentPosts(newArr);
                    break
                }
            }
        }
        // Out of Stock
        if (filter.status === "2") {
            let newArr = toolListBackup.filter((prev) => prev.status === "2")
            setToolList(newArr);
            setCurrentPosts(newArr);

            // Check type (C, R, MODULE, IC)
            for (var i = 0; i < 5; i++) {
                // set default
                if (filter.type === String(i)) {
                    break
                }
                if (filter.type === String(i + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(i + 1))
                    setToolList(newArr);
                    setCurrentPosts(newArr);
                    break
                }
            }
        }
        // Getting out of Stock
        if (filter.status === "3") {

            let newArr = toolListBackup.filter((prev) => prev.status === "3")
            setToolList(newArr);
            setCurrentPosts(newArr);

            // Check type (C, R, MODULE, IC)
            for (var x = 0; x < 5; x++) {
                // set default
                if (filter.type === String(x)) {
                    break
                }
                if (filter.type === String(x + 1)) {
                    newArr = newArr.filter((prev) => prev.type === String(x + 1))
                    setToolList(newArr)
                    setCurrentPosts(newArr)
                    break
                }
            }

        }
        return () => {

        }
    }, [filter.status, filter.type])

    // set the latest page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section>
            <div className="section-top">
                <div className="filter-button">
                    {/* <button className="btn btn-secondary" style={{ marginLeft: "10px" }}>Filters</button> */}
                    {/* {!auth.statusId ? null : <button className="btn btn-success">+New Tool</button>} */}
                </div>
                <FilterTool filterFunction={filter.tool} />
            </div>
            <div className="section-bottom">
                <MobileTool toolList={currentPosts} />
                <DesktopTool toolList={currentPosts} loading={loading} error={error} />
            </div>

            <Pagination postsPerPage={postsPerPage} totalPosts={toolList.length} paginate={paginate} />

        </section>
    )
}

export default Tool
