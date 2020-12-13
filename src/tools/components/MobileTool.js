import React from 'react';
import { Link } from "react-router-dom";


function MobileTool(props) {

    const toolList = props.toolList;

    return (
        toolList.map((res) => (
            <div className="mobile" key={res.id}>
                <Link to={`detail/${res.id}`}><img src={res.imageProfile} alt="jpg" /></Link>
                <h3>{res.toolName}</h3>
                <div className="mobile-content">
                    <div className="left">
                        <h4>Type</h4>
                        <h4>Status</h4>
                        <h4>Piece</h4>
                    </div>
                    <div className="righ">
                        <p>{res.type}</p>
                        <p>{res.status}</p>
                        <p>{res.total}</p>
                    </div>
                </div>
                <div className="mobile-button">
                    <button className="btn btn-submit">Request</button>
                    <button className="btn btn-success">+Add</button>
                </div>
            </div>
        ))
    )
}

export default MobileTool
