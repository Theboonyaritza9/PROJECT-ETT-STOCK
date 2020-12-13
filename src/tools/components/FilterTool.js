import React from 'react'

function FilterTool() {
    return (
        <div className="checkbox">
            <div className="stock-status">
                <h4>stock status</h4>
                <input type="checkbox" />
                <label htmlFor="#">All tools</label>
                <input type="checkbox" />
                <label htmlFor="#">Out of stock</label>
                <input type="checkbox" />
                <label htmlFor="#">Getting out of stock</label>
            </div>
            <div className="filter-tools">
                <h4>filter tools' name</h4>
                <input type="checkbox" />
                <label htmlFor="#">IC</label>
                <input type="checkbox" />
                <label htmlFor="#">Module</label>
                <input type="checkbox" />
                <label htmlFor="#">Coi</label>
                <input type="checkbox" />
                <label htmlFor="#">LM</label>
            </div>
        </div>
    )
}

export default FilterTool
