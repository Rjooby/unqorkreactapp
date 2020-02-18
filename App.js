import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Activities from './pages/Activities';
import Account from './pages/Account';

function App() {
    const defaultUserState = {firstName: null, lastName: null, email: null};

    const [userInfo, setUserInfo] = useState(defaultUserState);
    const [isLoggedIn, setLoginStatus] = useState(false);

    useEffect(() => {
        if (!isLoggedIn && sessionStorage.getItem('userSessionEmail')) {
            setLoginStatus(true);
            setUserInfo({firstName: null, lastName: null, email: sessionStorage.getItem('userSessionEmail') })
        }
    }, [isLoggedIn])

    const onLogin = (email) => {
        const newUser = {
            ...userInfo,
            email: email,
        };
        setUserInfo(newUser);

        sessionStorage.setItem('userSessionEmail', email);
        setLoginStatus(true);
    }

    const onLogout = () => {
        sessionStorage.clear();
        setUserInfo(defaultUserState);
        setLoginStatus(false);
    }

    return (
        <div className="app">
            <header className="app-header">
                <a href="/" className="logo">BORED?</a>
                <div>
                    {isLoggedIn ? <button onClick={onLogout}>Log Out</button> : null}
                </div>
            </header>
            <div className="app-body">
                <Router>
                    <NavigationBar />
                    <div className="app-content">
                        <Switch>
                            <Route path="/activities" component={Activities} />
                            <Route path="/account"
                                   render={(props) =>
                                       <Account {...props}
                                                userInfo={userInfo}
                                                setInfo={setUserInfo}
                                                isLoggedIn={isLoggedIn}
                                                onLogin={onLogin}
                                       />
                                   }
                            />
                            <Route path="/"
                                   render={() => (
                                       <div className="card">
                                           This is the Landing Page
                                       </div>
                                   )}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
