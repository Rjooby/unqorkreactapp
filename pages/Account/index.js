import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const Account = (props) => {
    const {
        userInfo,
        setInfo,
        isLoggedIn,
        onLogin,
    } = props;

    return (
        <React.Fragment>
            <Route
                exact
                path={`${props.match.url}/profile`}
                render={(props) => <Profile {...props} userInfo={userInfo}/>}
            />
            <Route
                exact
                path={`${props.match.url}/settings`}
                render={(props) => <Settings {...props}
                                             userInfo={userInfo}
                                             setInfo={setInfo}
                />}
            />
        </React.Fragment>
    )
}

export default Account
