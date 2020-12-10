import React from 'react';
import { Link } from "react-router-dom";

import "./TableDetailBoard.css"
import TableMobile from './TableMobile';


function TableDetailBoard() {
    return (
        <section className="container-table-detail-board">
            <div className="section-bottom">
                <h3 className="topic-board">Board's Tools</h3>
                <TableMobile />
                <div className="desktop">
                    <table>
                        <tr>
                            <th><h4>Image</h4></th>
                            <th><h4>Name</h4></th>
                            <th><h4>Type</h4></th>
                            <th><h4>Category</h4></th>
                            <th><h4>Size</h4></th>
                            {/* <th><h4>Status</h4></th> */}
                            <th><h4>Piece</h4></th>
                            <th><h4>Action</h4></th>
                        </tr>
                        <tr>
                            <th><Link to="/detail"><img src="/images/tool2.jpg" alt="jpg" /></Link></th>
                            <th><p>IC8002-1</p></th>
                            <th><p>IC</p></th>
                            <th><p>-</p></th>
                            <th><p>1M.</p></th>
                            {/* <th><p>getting out of stock</p></th> */}
                            <th><p>10</p></th>
                            <th>
                                <button className="btn btn-submit">Request</button>
                                <button className="btn btn-success">+Add</button>
                            </th>
                        </tr>
                        <tr>
                            <th><Link to="/detail"><img src="/images/tool1.jpg" alt="jpg" /></Link></th>
                            <th><p>IC8002-1</p></th>
                            <th><p>IC</p></th>
                            <th><p>-</p></th>
                            <th><p>1M.</p></th>
                            {/* <th><p>getting out of stock</p></th> */}
                            <th><p>10</p></th>
                            <th> <button className="btn btn-submit">Request</button>
                                <button className="btn btn-success">+Add</button></th>
                        </tr>
                        <tr>
                            <th><Link to="/detail"><img src="/images/tool2.jpg" alt="jpg" /></Link></th>
                            <th><p>IC8002-1</p></th>
                            <th><p>IC</p></th>
                            <th><p>-</p></th>
                            <th><p>1M.</p></th>
                            {/* <th><p>getting out of stock</p></th> */}
                            <th><p>10</p></th>
                            <th> <button className="btn btn-submit">Request</button>
                                <button className="btn btn-success">+Add</button></th>
                        </tr>
                        <tr>
                            <th><Link to="/detail"><img src="/images/tool1.jpg" alt="jpg" /></Link></th>
                            <th><p>IC8002-1</p></th>
                            <th><p>IC</p></th>
                            <th><p>-</p></th>
                            <th><p>1M.</p></th>
                            {/* <th><p>getting out of stock</p></th> */}
                            <th><p>10</p></th>
                            <th><button className="btn btn-submit">Request</button>
                                <button className="btn btn-success">+Add</button></th>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableDetailBoard
