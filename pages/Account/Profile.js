import React from 'react';
import './Account.css';

import { Link } from 'react-router-dom'

const Profile = (props) => {
    const {
        userInfo,
    } = props;

    const { firstName, lastName, email } = userInfo;
    return (
        <React.Fragment>

            <div className="card">
                <h3>User Profile</h3>
                    <div className="user-info">
                        {
                            (!firstName && !lastName) ?
                                <div className="unavailable">Unavailable</div> :
                                <div>{`${firstName ? firstName : ''} ${lastName ? lastName : ''}`}</div>
                        }
                        {
                            !email ?
                                <div className="unavailable">Unavailable</div> :
                                <div>{email}</div>
                        }
                    </div>

            </div>
            <Link to="/account/settings">
                Edit your information in the Settings Page
            </Link>
        </React.Fragment>
    )

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile;
