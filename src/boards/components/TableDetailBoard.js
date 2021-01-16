import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./TableDetailBoard.css"
import TableMobile from './TableMobile';

library.add(fas);



function TableDetailBoard(props) {

    const [tools, setTools] = useState([])

    useEffect(() => {
        if(props.tools) {
            // console.log(props.tools.length)
            if(props.newTools.length > 0) {
                setTools(props.newTools)
            } else {
                setTools(props.tools);
            }
        }
        return () => {
            //
        }
    }, [props.tools, props.modeDisplay, props.newTools])

    const deleteToolList = async (item) => {
        let filterData = await tools.filter((tool) => tool.id !== item);
        // setTools(filterData);
        if(filterData.length > 0) {
            props.onInput("tools", filterData, true);
        } else {
            setTools(filterData)
            props.onInput("tools", filterData, true);
        }
    }

    if (!props.tools) {
        return <div>Loading...</div>
    }


    return (
        <section className="container-table-detail-board">
            <div className="section-bottom">
                <h3 className="topic-board">Board's Tools</h3>
                <TableMobile tools={tools} modeDisplay={props.modeDisplay} onInput={props.onInput} />
                <div className="desktop">
                    <table className="table-detailBoard">
                        <thead>
                            <tr>
                                <th><h4>Image</h4></th>
                                <th><h4>Name</h4></th>
                                <th><h4>Type</h4></th>
                                <th><h4>Category</h4></th>
                                <th><h4>Size</h4></th>
                                <th><h4>Piece</h4></th>
                                {props.modeDisplay && <th>Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {tools.map((res) => (
                                <tr key={res.id}>
                                    <th><Link to="/detail"><img src={res.imageProfile} alt="jpg" /></Link></th>
                                    <th><p>{res.nameTool}</p></th>
                                    <th><p>{res.type}</p></th>
                                    <th><p>{res.category}</p></th>
                                    <th><p>{res.size}</p></th>
                                    <th><p>{res.total}</p></th>
                                    { props.modeDisplay && <th>   
                                        <FontAwesomeIcon
                                        icon={['fas', 'trash-alt']}
                                        size="1x"
                                        style={{ color: 'red', cursor: "pointer" }}
                                        onClick={() => deleteToolList(res.id)} 
                                        />
                                    </th>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableDetailBoard
