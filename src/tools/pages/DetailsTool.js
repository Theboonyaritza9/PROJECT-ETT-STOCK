import React from 'react';
import SliderImages from "../../shared/components/UIElements/SliderImages";
import { SliderData } from "../../shared/components/UIElements/SlideData";

import "./DetailsTool.css"
import "../../shared/components/FormElements/Button.css"

function DetailsTool() {
    return (
        <div className="header-detail">
            <div className="box-button">
                <button className="btn btn-secondary">Edit</button>
            </div>
            <div className="container-detail">
                <div>
                    <SliderImages SliderData={SliderData} />
                </div>
                <div className="box-description" >
                    <h2>IC8001-1</h2>
                    <h3>Tool's Description</h3>
                    <div className="detail">
                        <p>Total <span>8</span></p>
                        <p>Type <span>IC</span></p>
                        <p>Category <span>-</span></p>
                        <p>Size <span>1m</span></p>
                        <p>Status <span>getting out of stock</span></p>
                        <div className="footer-detail">
                            <p>Description</p>
                            <p>dcjskvbskjdvbsjkvbdskjvbdslkvjbdslvkjb</p>
                        </div>
                        <button className="btn btn-back">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsTool
