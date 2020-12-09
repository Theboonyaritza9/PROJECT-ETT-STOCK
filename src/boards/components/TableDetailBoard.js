import React from 'react';
import { Link } from "react-router-dom";

import "./TableDetailBoard.css"


function TableDetailBoard() {
    return (
        <section className="container-table-detail-board">
            <div className="section-bottom">
                <div className="mobile">
                    <Link to="/detail"><img src="/images/tool2.jpg" alt="jpg" /></Link>
                    <h3><Link>IC8002-1</Link></h3>
                    <div className="mobile-content">
                        <div className="left">
                            <h4>Type</h4>
                            <h4>Status</h4>
                            <h4>Use</h4>
                        </div>
                        <div className="righ">
                            <p>IC</p>
                            <p>getting out of stock</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <Link to="/detail"><img src="/images/tool1.jpg" alt="jpg" /></Link>
                    <h3><Link to="/">IC8002-1</Link></h3>
                    <div className="mobile-content">
                        <div className="left">
                            <h4>Type</h4>
                            <h4>Status</h4>
                            <h4>Use</h4>
                        </div>
                        <div className="righ">
                            <p>IC</p>
                            <p>out of stock</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <Link to="/detail"><img src="/images/tool1.jpg" alt="jpg" /></Link>
                    <h3><Link>IC8002-1</Link></h3>
                    <div className="mobile-content">
                        <div className="left">
                            <h4>Type</h4>
                            {/* <h4>Status</h4> */}
                            <h4>Use</h4>
                        </div>
                        <div className="righ">
                            <p>IC</p>
                            {/* <p>getting out of stock</p> */}
                            <p>10</p>
                        </div>
                    </div>
                </div>
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
