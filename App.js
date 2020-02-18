import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Activities from './pages/Activities';
import Account from './pages/Account';

function App() {
    const defaultUserState = {firstName: null, lastName: null, email: null};

    const [userInfo, setUserInfo] = useState(defaultUserState);
    const [isLoggedIn, setLoginStatus] = useState(false);

    const onLogin = (email) => {
        const newUser = {
            ...userInfo,
            email: email,
        };
        setUserInfo(newUser);
        setLoginStatus(true);
    }

    const onLogout = () => {
        setUserInfo(defaultUserState);
    }

    return (
        <div className="app">
            <header className="app-header">
                <a href="/" className="logo">BORED?</a>
                <button onClick={onLogout}>Log Out</button>
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
                            <Route path="/" render={() => <div>Landing Page</div>}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
