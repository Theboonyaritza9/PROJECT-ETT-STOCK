import React, { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listBoardAction } from "../../actions/boardAction"
import { AuthContext } from "../../shared/context/Auth-Context";

import "./Board.css";
import Pagination from '../../shared/components/UIElements/Pagination';

function Board() {

    const auth = useContext(AuthContext);
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardList);
    const { boards, loading, error } = boardList;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [currentPosts, setCurrentPosts] = useState([])

    useEffect(() => {
        dispatch(listBoardAction())
        if (boards) {
            // 1 * 10
            const indexOfLastPost = currentPage * postsPerPage;
            // 10 - 10 = 0
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const filterCurrentPosts = boards.slice(indexOfFirstPost, indexOfLastPost);
            setCurrentPosts(filterCurrentPosts)
        }
        return () => {

        }
    }, [boards, currentPage])

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section>
            <div className="section-top">
                <input type="text" placeholder="Search board.." className="search-board" />
                {!auth.statusId ? null : <button className="btn btn-back ">+ New Board</button>}
            </div>
            <div className="section-bottom-board">
                {currentPosts.map((res) => (
                    <div className="single-board" key={res.id}>
                        <div className="img">
                            <Link to="/detailboard"><img src={res.imageProfile} alt="jpg" /></Link>
                        </div>
                        <h3>{res.nameBoard}</h3>
                    </div>
                ))}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={boards.length} paginate={paginate} />
        </section>
    )
}

export default Board
