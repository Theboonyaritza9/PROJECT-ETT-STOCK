import React from 'react';

import './prompt.css';

export default function PromptMenu(props) {
    if (props.type === "boards") {
        return (
            <div className="prompt-menu-board">
                <ul className="prompt-menu-ul">
                    <li><a href="/">Add new Board</a></li>
                    <li><a href="/">Request Board</a></li>
                    <li><a href="/">Request new Project</a></li>
                    <li><a href="/">Boards list</a></li>
                    <li><a href="/">request-board History</a></li>
                    <li><a href="/">request-project History</a></li>
                </ul>
            </div>
        )
    }
        return (
            <div className="prompt-menu-tool">
                <ul className="prompt-menu-ul">
                    <li><a href="/">Add new Tool</a></li>
                    <li><a href="/">Tools list</a></li>
                    <li><a href="/">request-tool History</a></li>
                </ul>
            </div>
        )
}
