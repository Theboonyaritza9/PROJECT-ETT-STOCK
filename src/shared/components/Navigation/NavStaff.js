import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import './NavStaff.css';
import Profile from './Profile';
import Search from './Search';
import { equipmentApi, notificationApi, filterNotification } from '../../../Api';
import Notification from './Notification';


library.add(fas, far);

export default function Navstaff() {

    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [promptNotice, setpromptNotice] = useState(false);
    const [promptSearch, setpromptSearch] = useState(false);
    const [bellColor, setBellColor] = useState("black");
    const [blackDrop, setBlackDrop] = useState(false);
    const [promptProfile, setPromptProfile] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const [active, setActive] = useState(false);
    const [colorMenu, setColorMenu] = useState("#000")

    useEffect(() => {
        const data = filterNotification(notificationApi);
        setNewData(data.newData);
        setOldData(data.oldData);
        return () => {
            //
        }
    }, []);

    const handleClickSearch = () => {
        setShowSearch(true);
        setpromptNotice(false);
        setBellColor("black");
        setBlackDrop(false);
    }

    const handleShowSearch = () => {
        if (window.innerWidth <= 960) {
            setShowSearch(false);
        } else {
            setShowSearch(true);
        }
    };

    window.addEventListener('resize', handleShowSearch);

    const handleMenuIcon = () => {
        if(!menuIcon) {
            setColorMenu("#fff");
        } else {
            setColorMenu("#000");
        }
        setMenuIcon(!menuIcon);
        setActive(!active);
        setpromptNotice(false);
        setBellColor("black");
        setBlackDrop(false)
    }

    const handleActionBell = () => {
        if (promptNotice === false) {
            setPromptProfile(false)
            setBlackDrop(true);
            setpromptNotice(true)
            setBellColor('#1877f2');
        }
        if (promptNotice === true) {
            setpromptNotice(false)
            setBellColor("black");
            setBlackDrop(false);
        }
    }

    const handleBlackdrop = () => {
        setBlackDrop(false);
        setpromptNotice(false);
        setpromptSearch(false);
        setPromptProfile(false);
        setBellColor("black");
    }

    const handleSearch = () => {
        setBlackDrop(true);
    }

    const handleProfile = () => {
        console.log(promptProfile)
        if (promptProfile === true) {
            setpromptNotice(false);
            setBlackDrop(false);
            setPromptProfile(false);
        }
        else {
            setBlackDrop(true);
            setPromptProfile(true);
        }
    }

    const handleClickArrow = () => {
        setShowSearch(false);
        setBlackDrop(false);
    }


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo"><h2>ETT-STOCK</h2></Link>
                <div className="menu-icon" onClick={handleMenuIcon}>
                    <FontAwesomeIcon icon={menuIcon ? ['fas', 'times'] : ['fas', 'bars']} size="2x" style={{color: colorMenu}} />
                </div>
                <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        Tools
                        <ul>
                            <li><Link to="/">Add new tool</Link></li>
                            <li><Link to="/">tool's list</Link></li>
                            <li><Link to="/">request-tool history</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        Boards
                        <ul>
                            <li><Link to="/">Add new board</Link></li>
                            <li><Link to="/">Add new project</Link></li>
                            <li><Link to="/">Request board</Link></li>
                            <li><Link to="/">board's list</Link></li>
                            <li><Link to="/">request-board history</Link></li>
                            <li><Link to="/">request-project history</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link to="/">TodoList</Link></li>
                    <li className="nav-item"><Link to="/">อุปกรณ์ไม่ครบ</Link></li>
                </ul>
                {showSearch && <div className="nav-search" onClick={handleSearch}>
                    <div className="arrow-left" onClick={handleClickArrow}>
                        <FontAwesomeIcon icon={['fas', 'arrow-left']} size="2x"  />
                    </div>
                    <Search data={equipmentApi} status={promptSearch} />
                </div>}
                <FontAwesomeIcon icon={['fas', 'search']} size="lg" className="icon-opensearch" onClick={handleClickSearch} />
                <div className="nav-notification">
                    <FontAwesomeIcon icon={['fas', 'bell']} size="2x" style={{ color: bellColor }} onClick={handleActionBell} />
                    <span className="countNum">10</span>
                    {promptNotice && <Notification newData={newData} oldData={oldData} />}
                </div>
                <div onClick={handleProfile}>
                    <Profile name="Yukino" profileUser="https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png" />
                </div>
                {blackDrop && <div className="blackdrop" onClick={handleBlackdrop}></div>}
            </div>

            {promptProfile && <div className="prompt">
                <ul className="prompt-profile">
                    <li><a href="/">edit profile</a></li>
                    <li><a href="/">Sign out</a></li>
                </ul>
            </div>}
        </nav>

    )
}