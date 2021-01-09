import React from 'react'

import "./BoardIncomplete.css"

function BoardIncomplete() {
    return (
        <div className="container-incomplete">
            <div className="section-incomplete">
                <div className="headername-incomplete"><h3>Incomplete Board</h3></div>
                <div>
                    <div className="cover-incomplete">
                        <div className="header-incomplete">
                            <div className="proflie-img-incomplete">
                                <img src="/images/profile.png" alt="555" />
                            </div>
                            <div>
                                <p>Boonyarit (User)</p>
                                <p>12/12/63</p>
                            </div>
                        </div>
                        <div className="content-incomplete">
                            <h3>ETT-Arduino</h3>
                            <div className="detail-incomplete">
                                <table className="table-incomplete">
                                    <thead style={{ background: "#EAE6EB" }}>
                                        <tr>
                                            <th>Name</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>R100K</th>
                                            <th>10</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                        <tr>
                                            <th>R560</th>
                                            <th>3</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                        <tr>
                                            <th>R470</th>
                                            <th>8</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-incomplete">
                                <button className="btn btn-success-outline">Update</button>
                                <button className="btn btn-success">Update All</button>
                            </div>
                        </div>
                    </div>


                    <div className="cover-incomplete">
                        <div className="header-incomplete">
                            <div className="proflie-img-incomplete">
                                <img src="/images/profile.png" alt="555" />
                            </div>
                            <div>
                                <p>Boonyarit (User)</p>
                                <p>12/12/63</p>
                            </div>
                        </div>
                        <div className="content-incomplete">
                            <h3>ETT-SpeedRaider</h3>
                            <div className="detail-incomplete">
                                <table className="table-incomplete">
                                    <thead style={{ background: "#EAE6EB" }}>
                                        <tr>
                                            <th>Name</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>IC1001</th>
                                            <th>2</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                        <tr>
                                            <th>C0.1</th>
                                            <th>3</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                        <tr>
                                            <th>10 uf</th>
                                            <th>8</th>
                                            <th><input type="number" /></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btn-incomplete">
                                <button className="btn btn-success-outline">Update</button>
                                <button className="btn btn-success">Update All</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="figure-box"></div>
            <div className="figure-bar"></div>
        </div>
    )
}

export default BoardIncomplete
