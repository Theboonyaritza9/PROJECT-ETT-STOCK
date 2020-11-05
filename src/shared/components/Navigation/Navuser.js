import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import './Navuser.css';

library.add(fas, far);

export default function Navuser() {
    return (
        <div className="container">
            <div className="Nav-container">
                <div><h1>ETT STOCK</h1></div>

                <div>
                    <ul>
                        <li><a href="/">Tools</a></li>
                        <li><a href="/">Boards</a></li>
                        <li><a href="/">TodoList</a></li>
                        <li><a href="/">อุปกรณ์ไม่ครบ</a></li>
                    </ul>
                </div>

                <div className="Nav-search">
                    <form>
                        <input type="text" name="search" placeholder="search..." />
                        <FontAwesomeIcon icon={['fas', 'search']} size="sm" />
                    </form>
                </div>
                <div className="Nav-footer">
                    <FontAwesomeIcon icon={['fas', 'bell']} size="2x" />
                    <div className="Nav-profile">
                        <div className="Nav-profile-img">
                            <img src="https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png" alt="1234" />
                        </div>
                        <p>Yukino</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
