import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { apiHistoryTool, apiHistoryBoard, apiHistory } from "../../ApiHistory";
import "./HistoryBoard.css";

function History(props) {

    const [api, setApi] = useState([]);
    const [headerPage, setHeaderPage] = useState();
    
    // http://localhost:3000/history/vdsvjskvnskvjsn
    const boardid = useParams().bid;

    useEffect(() => {
        if (boardid) {
            setHeaderPage("ETT-TEST");
            setApi(apiHistory);
        }
        if (props.keyApi === 1) {
            setApi(apiHistoryBoard)
            setHeaderPage("Board");
        }
        if (props.keyApi === 2) {
            setApi(apiHistoryTool)
            setHeaderPage("Tool");
        }
        return () => {

        }
    }, [props.keyApi])

    // Temporary Data


    return (
        <section>
            <div className="container-history">
                <h3 className="history-namepage">To request {headerPage}</h3>

                {/* It will display Width morn than 960px */}
                <div className="desktop">
                    <table className="table-history">
                        <thead>
                            <tr>
                                <th><h4>Date</h4></th>
                                <th><h4>Name {!boardid && headerPage}</h4></th>
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
                                    <th><p>{res.name}</p></th>
                                    <th><p>{res.total}</p></th>
                                    <th><p>{res.user}</p></th>
                                    <th><p>{res.time}</p></th>
                                    <th><p>{res.description}</p></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    { boardid && <div className="total-history">
                        <p>All boards in this year</p>
                        <p>160 boars</p>
                    </div> }
                </div>

                {/* It will display Width less than 960px */}
                <div className="box-history">
                    <h3>To request {headerPage}</h3>
                    {api.map((res) => (
                        <div className="cover-moblie-history" key={res.id}>
                            <div className="header-moblie-history">
                                <h3>{res.date} : {res.time}</h3>
                            </div>
                            <div className="content-moblie-history">
                                <p>{res.name} ({res.user})</p>
                                <p>{res.total} {boardid ? "pcs" : headerPage}</p>
                            </div>
                            <div className="footer-moblie-history">
                                <p>Description</p>
                                <p>{res.description}</p>
                            </div>
                        </div>
                    ))}
                    { boardid && <div className="total-history">
                        <p>All boards in this year</p>
                        <p>160 boars</p>
                    </div> }
                </div>

            </div>
        </section>
    )
}

export default History
