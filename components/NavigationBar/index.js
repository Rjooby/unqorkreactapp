import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

import Accordion from '../Accordion';

const NavigationBar = (props) => {
    const { } = props;

    return (
        <div className="nav-bar">
            <ul className="nav-list">
                <li className={"nav-item"}>
                    <Accordion title="Activities">
                        <NavLink to="/activities/recreational">Recreational</NavLink>
                        <NavLink to="/activities/cooking">Cooking</NavLink>
                    </Accordion>
                </li>
                <li className={"nav-item"}>
                    <Accordion title="Account">
                        <NavLink to="/account/profile">Profile</NavLink>
                        <NavLink to="/account/settings">Settings</NavLink>
                    </Accordion>
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar;
