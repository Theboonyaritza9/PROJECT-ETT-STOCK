import React, { useState } from 'react';
import "./HistoryBoard.css";

function HistoryBoard() {

    // Temporary Data
    const api = [
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
            date: "13/05/63",
            time: "12.50 pm",
            description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
        },
        {
            id: '2000',
            nameBoard: "ET-SpeedRaider",
            user: "Staff",
            total: "90",
            date: "15/05/63",
            time: "16.20 pm",
            description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
        },
        {
            id: '1007',
            nameBoard: "ET-RS232",
            user: "User",
            total: "20",
            date: "15/05/63",
            time: "10.10 am",
            description: "nocdsc cdscdsc cdscs dcscsc sdcsdc"
        },
        {
            id: '2006',
            nameBoard: "ET-WATER",
            user: "Admin",
            total: "50",
            date: "17/05/63",
            time: "09.50 am",
            description: "nocdsc cdscdsc cdscs dcscsc sdcsdc ffdsf vdsvsdvs sdfdssasd dscacasc facasca cascacaca"
        }
    ]

    return (
        <section>
            <div className="section-bottom">
                <h3 className="history-namepage">To request Board</h3>

                {/* It will display Width morn than 960px */}
                <div className="desktop">
                    <table className="table-history">
                        <thead>
                            <tr>
                                <th><h4>Date</h4></th>
                                <th><h4>Name Board</h4></th>
                                <th><h4>Total</h4></th>
                                <th><h4>Username</h4></th>
                                <th><h4>Time</h4></th>
                                <th><h4>Description</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {api.map((res) => (
                                <tr key={res.id}>
                                    <th><p>{res.date}</p></th>
                                    <th><p>{res.nameBoard}</p></th>
                                    <th><p>{res.total}</p></th>
                                    <th><p>{res.user}</p></th>
                                    <th><p>{res.time}</p></th>
                                    <th><p>{res.description}</p></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 {/* It will display Width less than 960px */}
                <div className="box-history">
                    <h3>To request Board</h3>
                    {api.map((res) => (
                        <div className="cover-moblie-history" key={res.id}>
                            <div className="header-moblie-history">
                                <h3>{res.date} : {res.time}</h3>
                            </div>
                            <div className="content-moblie-history">
                                <p>{res.nameBoard} ({res.user})</p>
                                <p>{res.total} board</p>
                            </div>
                            <div className="footer-moblie-history">
                                <p>Description</p>
                                <p>{res.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default HistoryBoard
