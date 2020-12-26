import React, { useState } from 'react';
import "./HistoryBoard.css";

function HistoryBoard() {

    const [openDescription, setOpenDescription] = useState(false);

    const handleOpenDescription = () => {
        // setOpenDescription(!openDescription)
    }

    const api = [
        {
            id: "12",
            month: "May 2020",
            history: [
                {
                    id: '1000',
                    nameBoard: "ET-CNT001",
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
                    nameBoard: "ET-CNT001",
                    user: "Boonyarit",
                    total: "50",
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
                {/* {openDescription && <div onClick={handleOpenDescription} className="backdrop-history" ></div>} */}
                <div className="title-history">
                    <h3>To request Board</h3>
                </div>
                {api.map(mon => (
                    <div className="history" key={mon.id}>
                        <p>{mon.month} : <span>{mon.history.length} list</span></p>
                        {mon.history.map(res => (
                            <div className="cover-history" key={res.id}>
                                <p>{res.nameBoard}</p>
                                <p onClick={handleOpenDescription}>Description</p>

                                {openDescription && <div className="des-history">
                                    <div className="des-content">
                                        <p>Request name</p>
                                        <p>{res.user}</p>
                                    </div>
                                    <div className="des-content">
                                        <p>Total</p>
                                        <p>{res.total}</p>
                                    </div>
                                    <div className="des-content">
                                        <p>Date</p>
                                        <p>{res.date}</p>
                                    </div>
                                    <div className="des-content">
                                        <p>Time</p>
                                        <p>{res.time}</p>
                                    </div>
                                    <div className="des-content">
                                        <p>Description</p>
                                        <p>{res.description}</p>
                                    </div>
                                </div>}
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </React.Fragment>
    )
}

export default HistoryBoard
