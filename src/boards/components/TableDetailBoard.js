import React from 'react';
import { Link } from "react-router-dom";

import "./TableDetailBoard.css"
import TableMobile from './TableMobile';


function TableDetailBoard(props) {

    if(!props.tools) {
        return <div>Loading...</div>
    }

    return (
        <section className="container-table-detail-board">
            <div className="section-bottom">
                <h3 className="topic-board">Board's Tools</h3>
                <TableMobile tools={props.tools} />
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
                            </tr>
                        </thead>
                        <tbody>
                            {props.tools.map((res) => (
                                <tr key={res.id}>
                                    <th><Link to="/detail"><img src={res.imageProfile} alt="jpg" /></Link></th>
                                    <th><p>{res.nameTool}</p></th>
                                    <th><p>{res.type}</p></th>
                                    <th><p>{res.category}</p></th>
                                    <th><p>{res.size}</p></th>
                                    <th><p>{res.total}</p></th>
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
