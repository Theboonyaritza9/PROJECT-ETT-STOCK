import React from 'react';
import SliderImages from "../../shared/components/UIElements/SliderImages";

import "./DetailsBoard.css"
import "../../shared/components/FormElements/Button.css"
import DescriptionBoard from '../components/DescriptionBoard';
import TableDetailBoard from '../components/TableDetailBoard';
import { SliderData2 } from "../../shared/components/UIElements/SlideData";

function DetailsBoards() {
    return (
        <div className="header-detail">
            <div className="box-button">
                <button className="btn btn-secondary">Edit</button>
            </div>
            <div className="container-detail">
                <SliderImages SliderData={SliderData2} />
                <DescriptionBoard />
            </div>
            <TableDetailBoard />    
            <button className="btn btn-back">Back</button>
        </div>
    )
}

export default DetailsBoards
