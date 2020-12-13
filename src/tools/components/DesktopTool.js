import React from 'react'
import { Link } from "react-router-dom";


function DesktopTool(props) {

    const { toolList, loading, error } = props;

    return (
        <div className="desktop">
            <table>
                <thead>
                    <tr>
                        <th><h4>Image</h4></th>
                        <th><h4>Name</h4></th>
                        <th><h4>Type</h4></th>
                        <th><h4>Category</h4></th>
                        <th><h4>Size</h4></th>
                        <th><h4>Status</h4></th>
                        <th><h4>Piece</h4></th>
                        <th><h4>Action</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <div>Loading...</div> :
                        error ? <div>{error}</div> :
                            toolList.map((res) => (
                                <tr key={res.id}>
                                    <th><Link to={`/detail/${res.id}`}><img src={res.imageProfile} alt="jpg" /></Link></th>
                                    <th><p>{res.toolName}</p></th>
                                    <th><p>{res.type}</p></th>
                                    <th><p>{res.size}</p></th>
                                    <th><p>{res.category}</p></th>
                                    <th><p>{res.status}</p></th>
                                    <th><p>{res.status}</p></th>
                                    <th>
                                        <button className="btn btn-submit">Request</button>
                                        <button className="btn btn-success">+Add</button>
                                    </th>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DesktopTool
