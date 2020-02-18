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
                        <NavLink to="/activities/recreational" className="nav-link" activeClassName="active">
                            Recreational
                        </NavLink>
                        <NavLink to="/activities/cooking" className="nav-link" activeClassName="active">
                            Cooking
                        </NavLink>
                    </Accordion>
                </li>
                <li className={"nav-item"}>
                    <Accordion title="Account">
                        <NavLink to="/account/profile" className="nav-link" activeClassName="active">
                            Profile
                        </NavLink>
                        <NavLink to="/account/settings" className="nav-link" activeClassName="active">
                            Settings
                        </NavLink>
                    </Accordion>
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar;
