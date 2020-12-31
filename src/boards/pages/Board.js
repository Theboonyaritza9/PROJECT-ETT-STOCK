import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listBoardAction } from "../../actions/boardAction"
import { AuthContext } from "../../shared/context/Auth-Context";

import "./Board.css";

function Board() {

    const auth = useContext(AuthContext);
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardList);
    const { boards, loading, error } = boardList;

    useEffect(() => {
        dispatch(listBoardAction())
        return () => {

        }
    }, [])

    return (
        <section>
            <div className="section-top">
                <input type="text" placeholder="Search board.." className="search-board" />
                {!auth.statusId ? null : <button className="btn btn-back ">+ New Board</button>}
            </div>
            <div className="section-bottom-board">
                {boards.map((res) => (
                    <div className="single-board" key={res.id}>
                        <div className="img">
                            <Link to="/detailboard"><img src={res.imageProfile} alt="jpg" /></Link>
                        </div>
                        <h3>{res.nameBoard}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Board
