import React from 'react'

function TableMobile(props) {

    const tool = props.tools;
    if (!tool) {
        return <div>Loading...</div>
    }


    return (
        <div className="mobile-responsive">
            {tool.map((res) => (
                <div className="box" key={res.id}>
                    <div className="images">
                        <img src={res.imageProfile} alt="555" />
                    </div>
                    <h4>{res.nameTool}</h4>
                    <div className="text">
                        <div className="total-board">
                            <p>{res.total} pc</p>
                        </div>
                        <div className="type-board">
                            <p>{res.type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableMobile
