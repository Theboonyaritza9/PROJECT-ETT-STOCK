import React from 'react';

export default function Blackdrop(props) {

    return (
        <React.Fragment>
            <div className="blackdrop" onClick={props.onClick}></div>
        </React.Fragment>
    )
}
