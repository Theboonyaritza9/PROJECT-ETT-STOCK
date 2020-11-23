import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import './Search.css';
library.add(fas);

export default function Search(props) {

    const [text, setText] = useState('');
    const [action, setAction] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const data = props.data || [];

    const onTextChanged = (e) => {
        setAction(true);
        const value = e.target.value;
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = data.sort().filter(res => regex.test(res.name))
        }
        setSuggestions(suggestions);
        setText(value);
    }

    const clearAllvalues = () => {
        setText('');
        setSuggestions([]);
    }

    const selectedValue = (value) => {
        setAction(false)
        setText(value);
        setSuggestions([]);
    }

    const handleLi = (item) => {
        selectedValue(item.name)
        setAction(false);
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul className='search-suggest'>
                {suggestions.map((item) =>
                    <li onClick={handleLi} key={item.size}>
                        <a href="/">{item.name} <span>{`(${item.type})`}</span></a>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <React.Fragment>
            {/* <div className="Nav-search" > */}
            <input type="text" placeholder="search..." value={text} onChange={onTextChanged} />
            <input type="password" />
            <div className="icon-search">
                <FontAwesomeIcon icon={['fas', 'search']} size="sm" />
            </div>
            <div className="times-cancle" onClick={clearAllvalues}>
                <FontAwesomeIcon icon={['fas', 'times']} size="2x" />
            </div>
            {/* <div className="container-icon-times">
                    <div className="cover-icon-times">
                        <FontAwesomeIcon icon={['fas', 'times']} 
                        size="sm" className="icon-cancel" 
                        onClick={clearAllvalues}
                        />
                    </div>
                </div> */}
            {action && renderSuggestions()}
            {/* </div > */}
            {/* {action && <div className="blackdrop2" onClick={() => setAction(false)}></div>} */}
        </React.Fragment>
    )


}
