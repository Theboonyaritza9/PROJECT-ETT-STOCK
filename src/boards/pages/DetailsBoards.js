import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SliderImages from "../../shared/components/UIElements/SliderImages";

import "./DetailsBoard.css"
import "../../shared/components/FormElements/Button.css"
import DescriptionBoard from '../components/DescriptionBoard';
import TableDetailBoard from '../components/TableDetailBoard';
import { SliderData2 } from "../../shared/components/UIElements/SlideData";
import { ItemBoardAction } from "../../actions/boardAction";

function DetailsBoards() {

    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardItem);
    const { board, loading, error } = boardList;
    // console.log(board.tools)

    useEffect(() => {
        dispatch(ItemBoardAction())
        // if(board != undefined) {
            // console.log(board)
        // }
        return () => {

        }
    }, [board])

    return (
        <div className="header-detail">
            <div className="box-button">
                <button className="btn btn-secondary">Edit</button>
            </div>
            <div className="container-detail">
                <SliderImages SliderData={board.images} />
                <DescriptionBoard name={board.nameBoard} des={board.description} type={board.type} />
            </div>
            <TableDetailBoard tools={board.tools} />    
            <Link to="/boards"><button className="btn btn-back">Back</button></Link>
        </div>
    )
}

export default DetailsBoards
