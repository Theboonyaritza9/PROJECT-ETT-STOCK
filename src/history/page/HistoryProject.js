import React from 'react';
import { Link } from "react-router-dom";
import "./HistoryBoard.css";

function HistoryProject() {

    const api = [
        {
            id: "12",
            month: "May 2020",
            history: [
                {
                    id: '1000',
                    nameBoard: "WETHER-RAIN",
                    user: "Boonyarit",
                    total: "50",
                    date: "12/05/63",
                    time: "13.50 pm",
                    description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
                },
                {
                    id: '1001',
                    nameBoard: "ET-CNT002",
                    user: "User",
                    total: "50",
                    date: "12/05/63",
                    time: "13.50 pm",
                    description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
                }
            ]
        },
        {
            id: "13",
            month: "June 2020",
            history: [
                {
                    id: '2000',
                    nameBoard: "PROJECT-1",
                    user: "Boonyarit",
                    total: "5",
                    date: "12/05/63",
                    time: "13.50 pm",
                    description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
                }
            ]
        }
    ]

    return (
        <React.Fragment>
            <div className="container-history">
                <div className="title-history">
                    <h3>To request Project</h3>
                </div>
                {api.map(mon => (
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
