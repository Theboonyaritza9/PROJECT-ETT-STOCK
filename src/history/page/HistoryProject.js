import React from 'react';
import { Link } from "react-router-dom";
import { apiProject } from "../../ApiHistory";
import "./HistoryProject.css";

function HistoryProject() {

    return (
        <React.Fragment>
            <div className="container-history-project">
                <div className="title-history">
                    <h3>To request Project</h3>
                </div>
                {apiProject.map(mon => (
                    <div className="history" key={mon.id}>
                        <p>{mon.month} : <span>{mon.history.length} list</span></p>
                        {mon.history.map(res => (
                            <div className="cover-history" key={res.id}>
                                <p>{res.nameBoard}</p>
                                <p><Link to="/history/detailproject">Description</Link></p>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}

export default HistoryProject
