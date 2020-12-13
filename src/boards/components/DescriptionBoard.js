import React from 'react'

function DescriptionBoard(props) {

    const { name, des, type } = props

    if(!name) {
        return <div>Loading...</div>
    }

    return (
        <div className="box-description" >
            <h2>{name}</h2>
            <h3>Board's Description</h3>
            <div className="detail">
                <p>Kind of work <span>{type}</span></p>
                <div className="footer-detail">
                    <p>Description</p>
                    <p>{des}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionBoard
