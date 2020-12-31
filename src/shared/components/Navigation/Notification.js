import React from 'react';

import './Notification.css';
import Profile from './Profile';

const Notification = (props) => {

    return (
        <div className="prompt-notification" id={props.className || ''}>
            <h2>Notifications</h2>
            <h3>New</h3>

            {props.newData.length === 0 ? <div></div> :
                props.newData.map((item) => (
                    <div className="list-notification" key={item.id}>
                        <Profile profileUser={item.profile} name={item.user} status={item.status} key={item.id} />
                        <span>{item.description}</span>
                        <p className="time">{item.time}</p>
                    </div>
                ))
            }

            {props.oldData.length === 0 ? null : <h3>Earlier</h3>}
            {props.oldData.length === 0 ? <div></div> :
                props.oldData.map((item) => (
                    <div className="list-notification" key={item.id}>
                        <Profile profileUser={item.profile} name={item.user} status={item.status} key={item.id} />
                        <span>{item.description}</span>
                        <p className="time">{item.time}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Notification;
