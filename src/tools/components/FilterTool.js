import React, { useState } from 'react'
import "./FilterTool.css";

function FilterTool(props) {

    const [checkStatus, setCheckStatus] = useState("1");
    const [checkEquipment, setCheckEquipment] = useState("");

    // const { tool } = useFilter();

    const handleCheckboxStatus = (e) => {
        setCheckStatus(e.target.value)
        props.filterFunction(e.target.value, checkEquipment)
    }

    const handleCheckboxEquipment = (e) => {
        setCheckEquipment(e.target.value)
        props.filterFunction(checkStatus, e.target.value)
    }

    return (
        <div className="checkbox">
            <div className="stock-status">
                <h4>Stock Status</h4>

                <div className="cover-filter-input-status">
                    <select onChange={handleCheckboxStatus} className="filter-select">
                        <option value="1">Default</option>
                        <option value="2">Out of Stock</option>
                        <option value="3">Getting out of Stock</option>
                    </select>
                </div>
            </div>
            <div className="filter-tools">
                <h4>Filter tools' name</h4>
                <div className="cover-filter-input-equipment">
                    <select onChange={handleCheckboxEquipment} className="filter-select">
                        <option value="0">Default</option>
                        <option value="1">IC</option>
                        <option value="2">Module</option>
                        <option value="3">R</option>
                        <option value="4">C</option>
                        <option value="5">LM</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterTool
