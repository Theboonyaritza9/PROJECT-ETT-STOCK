import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);
import "./Button.css"

function Button({to, buttonStyle, children, type}) {
    if (to) {
        if (buttonStyle == "btn-back") {
            return (
                <Link to={to} className="btn btn-back">
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} size="sm" />
                    {children}
                </Link>
            )
        } else if (buttonStyle == "btn-edit-image") {
            return (
                <Link to={to} className="btn btn-edit-image">
                    <FontAwesomeIcon icon={['far', 'file-image']} size="lg" />
                    {children}
                </Link>
            )
        }
    }
    return (
        <button type={type ? type : "button"} className={buttonStyle}>
            {children}
        </button>
    )
}

export default Button
