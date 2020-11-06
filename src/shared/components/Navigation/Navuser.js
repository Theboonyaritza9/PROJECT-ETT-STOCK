import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import './Navuser.css';
import Profile from './Profile';

library.add(fas, far);

export default function Navuser() {


    const [promptProfile, setPromptProfile] = useState(false)

    return (
        <div className="container">
            <div className="Nav-container">
                <div><h1>ETT STOCK</h1></div>

                <ul>
                    <li className="li-Navlink active"><a href="/">Tools</a></li>
                    <li className="li-Navlink"><a href="/">Boards</a></li>
                    <li className="li-Navlink"><a href="/">TodoList</a></li>
                    <li className="li-Navlink"><a href="/">อุปกรณ์ไม่ครบ</a></li>
                </ul>

                <div className="Nav-search">
                    <form>
                        <input type="text" name="search" placeholder="search..." />
                        <FontAwesomeIcon icon={['fas', 'search']} size="sm" />
                    </form>
                </div>
                <div className="Nav-footer">
                    <FontAwesomeIcon icon={['fas', 'bell']} size="2x" />
                    <div onClick={() => setPromptProfile(true)} style={{ cursor: 'pointer' }}>
                        <Profile name="Yukino" profileUser="https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png" />
                    </div>
                </div>
                {promptProfile &&
                    <div className="prompt">
                        <ul className="prompt-profile">
                            <li><a href="/">edit profile</a></li>
                            <li><a href="/">Sign out</a></li>
                        </ul>
                    </div>
                }
                {promptProfile &&
                    <div className="blackdrop" onClick={() => setPromptProfile(false)}></div>
                }
            </div>
        </div>
    )
}
