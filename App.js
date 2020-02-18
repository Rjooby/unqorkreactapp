import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <a href="/" className="logo">BORED?</a>
                <div></div>
            </header>
            <div className="app-body">
                <Router>
                    <NavigationBar />
                    <div className="app-content">
                        <Switch>
                            <Route path="/activities" render={() => <div>Activities</div>} />
                            <Route path="/account" render={() => <div>Account</div>}/>
                            <Route path="/" render={() => <div>Landing Page</div>}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
