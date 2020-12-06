import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);
import "./Button.css"

const Button = (props) => {
    if (props.to) {
        // if (buttonStyle == "btn-back") {
        //     return (
        //         <Link to={to} className="btn btn-back">
        //             <FontAwesomeIcon icon={['fas', 'arrow-left']} size="sm" />
        //             {children}
        //         </Link>
        //     )
        // } 
        // else if (buttonStyle == "btn-edit-image") {
            return (
                <Link to={props.to} className="btn btn-edit-image">
                    <FontAwesomeIcon icon={['far', 'file-image']} size="lg" />
                    {props.children}
                </Link>
            )
        // }
    }
    return (
        <button type={props.type ? props.type : "button"} className={props.buttonStyle} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
