import React, { useState } from 'react'

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
                    <div className="filter-input">
                        <input type="checkbox" value="1" onChange={handleCheckboxStatus} />
                        <label htmlFor="#">All Tools</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="2" onChange={handleCheckboxStatus} />
                        <label htmlFor="#">Out of stock</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="3" onChange={handleCheckboxStatus} />
                        <label htmlFor="#">Getting out of stock</label>
                    </div>

                </div>

            </div>
            <div className="filter-tools">
                <h4>Filter tools' name</h4>
                <div className="cover-filter-input-equipment">

                    <div className="filter-input">
                        <input type="checkbox" value="1" onChange={handleCheckboxEquipment} />
                        <label htmlFor="#">IC</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="2" onChange={handleCheckboxEquipment} />
                        <label htmlFor="#">Module</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="3" onChange={handleCheckboxEquipment} />
                        <label htmlFor="#">R</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="4" onChange={handleCheckboxEquipment} />
                        <label htmlFor="#">C</label>
                    </div>
                    <div className="filter-input">
                        <input type="checkbox" value="5" onChange={handleCheckboxEquipment} />
                        <label htmlFor="#">LM</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterTool
