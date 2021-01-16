import React, { useState, useEffect } from 'react';

function TableMobile(props) {

    const [tools, setTools] = useState([])

    useEffect(() => {
        if (props.tools) {
            setTools(props.tools)
        }
        return () => {
            //
        }
    }, [props.tools])

    if (!props.tools) {
        return <div>Loading...</div>
    }

    const deleteToolList = async (item) => {
        let filterData = await tools.filter((tool) => tool.id !== item);
        setTools(filterData);
        props.onInput("tools", filterData, true);
    }


    return (
        <div className="mobile-responsive">
            {tools.map((res) => (
                <div className="box" key={res.id}>
                    { props.modeDisplay && <div className="cancle" onClick={() => deleteToolList(res.id)}><span>x</span></div>}
                    <div className="images">
                        <img src={res.imageProfile} alt="555" />
                    </div>
                    <h4>{res.nameTool}</h4>
                    <div className="text">
                        <div className="type-board">
                            <p>{res.type}</p>
                        </div>
                        <div className="total-board">
                            <p>{res.total} pc</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableMobile
