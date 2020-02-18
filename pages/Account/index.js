import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const Account = (props) => {
    const {
        userInfo,
        setInfo,
        isLoggedIn,
        onLogin,
    } = props;

    const [signInEmail, setEmail] = useState(null);

    const onSignIn = (e) => {
        e.preventDefault();
        onLogin(signInEmail);
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    //  Should ideally be extracted into its own authentication component and
    //  rendered whenever needing auth with redirect parameters for previous page preserved in URL or state
    if (!isLoggedIn) {
        return (
            <div className="card">
                Please sign in
                <form className="form" onSubmit={onSignIn}>
                    <label htmlFor="emailSignin">Email</label>
                    <input type="email"
                           name="emailSignin"
                           aria-label="Sign In Email"
                           onChange={handleChange}/>

                    <label htmlFor="signIn">
                        <input type="submit" className="submit-button" name="signIn" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
    //

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
            <Route
                exact
                path={`${props.match.path}`}
                render={(props) => (
                    <div className="card">
                        <div><Link to={`${props.match.path}/profile`}>Profile</Link></div>
                        <div><Link to={`${props.match.path}/settings`}>Settings</Link></div>
                    </div>
                )}
            />
        </React.Fragment>
    )
}

export default Account
