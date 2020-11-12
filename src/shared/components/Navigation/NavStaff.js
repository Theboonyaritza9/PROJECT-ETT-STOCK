import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import './NavStaff.css';

import Profile from './Profile';
import Search from './Search';
import { equipmentApi, notificationApi, filterNotification } from '../../../Api';
import Notification from './Notification';
import PromptMenu from './PromptMenu';

library.add(fas, far);

export default function Navstaff() {

    const [promptProfile, setPromptProfile] = useState(false);
    const [promptNotice, setpromptNotice] = useState(false);
    const [promptMenu, setPromptMenu] = useState(false);
    const [linkMenu, setLinkMenu] = useState(null)
    const [slideBar, setSlideBar] = useState(false);
    const [num, setNum] = useState(10);
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [bellColor, setBellColor] = useState("black");
    const [promptSearch, setPromptSearch] = useState(false);

    const handleAction = () => {
        setPromptProfile(false);
        if (promptNotice === true) {
            handleActionBell()
        }
    }

    const handleActionBell = () => {
        // console.log(promptNotice)
        if (promptNotice === false) {
            setpromptNotice(true)
            setBellColor('#1877f2');
        }
        if (promptNotice === true) {
            setpromptNotice(false)
            setBellColor("black");
        }
    }

    const handleMenuLink = () => {
        setPromptMenu(true);
        setLinkMenu("boards")
    }
    const handleMenuLink2 = () => {
        setPromptMenu(true);
        setLinkMenu(null)
    }

    useEffect(() => {
        console.log('render');
        const data = filterNotification(notificationApi);
        setNewData(data.newData);
        setOldData(data.oldData);
        return () => {
            //
        }
    }, [])



    return (
        <div className="container">
            <div className="Nav-container">

                {/* Responsive 768px */}
                <div className="cover-hamburgur" onClick={() => setSlideBar(true)}>
                    <div className="hamburgur">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>

                {slideBar && <div className="slideBar">
                    <div className="header-slide">
                        <div className="slide-profile">
                            <Profile name="Yukino" profileUser="https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png" />
                        </div>
                        <div className="btn-cancle-slide" onClick={() => setSlideBar(false)}>
                            <FontAwesomeIcon icon={['fas', 'times']} size="sm" className="icon-search" />
                        </div>
                    </div>
                    <ul className="menu-slideBar">
                        <li className=""><a href="/">Tools</a></li>
                        <li className=""><a href="/">Boards</a></li>
                        <li className=""><a href="/">TodoList</a></li>
                        <li className=""><a href="/">อุปกรณ์ไม่ครบ</a></li>
                    </ul>
                    <hr style={{ background: "#ccc", height: '1px' }} />
                    <ul className="menu-slideBar">
                        <li className=""><a href="/">edit profile</a></li>
                        <li className=""><a href="/">Sign out</a></li>
                    </ul>
                </div>}

                <div className="headerName"><h1>ETT STOCK</h1></div>

                <ul className="ul-Navlink">
                    <li className="li-Navlink active" onClick={handleMenuLink2}>Tools</li>
                    <li className="li-Navlink" onClick={handleMenuLink}>Boards</li>
                    <li className="li-Navlink">TodoList</li>
                    <li className="li-Navlink">อุปกรณ์ไม่ครบ</li>
                </ul>

                {promptSearch && <div className="cover-search" onClick={handleAction} >
                    <Search data={equipmentApi} />
                </div>}

                <div className="Nav-footer">
                    <FontAwesomeIcon icon={['fas', 'search']} size="sm" onClick={() => setPromptSearch(true)} />
                    <FontAwesomeIcon icon={['fas', 'bell']} size="2x" onClick={handleActionBell} style={{ color: bellColor }} />

                    {num === 0 ? null : <div className="notificationNumber"><span>{num}+</span></div>}
                    {promptNotice && <Notification newData={newData} oldData={oldData} />}
                    <div onClick={() => setPromptProfile(true)} style={{ cursor: 'pointer' }}>
                        <Profile name="Yukino" profileUser="https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png" />
                    </div>
                </div>
                {promptNotice && <div className="blackdrop" onClick={handleActionBell}></div>}

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

                {promptMenu &&
                    <div className="blackdrop" onClick={() => setPromptMenu(false)}></div>
                }

                {/* Responsive 768px */}
                {promptSearch && <div className="arrow-left">
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} size="2x" onClick={() => setPromptSearch(false)} />
                </div>}

                {promptNotice && <Notification newData={newData} oldData={oldData} className="resize" />}

                {promptMenu && <PromptMenu type={linkMenu} />}

            </div>
        </div>

    )
}