import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
    const { } = props;

    return (
        <div className="nav-bar">
            <ul className="nav-list">
                <li className={"nav-item"}>
                    Activities
                </li>
                <li className={"nav-item"}>
                    Account
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar;
