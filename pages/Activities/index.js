import React from 'react';
import { Route, Link } from 'react-router-dom';
import Activity from "./Activity";

const Activities = (props) => {
    console.log(`${props.match.path}/recreational`);
    return(
        <div>
            <Route
                exact
                path={`${props.match.url}/recreational`}
                render={(props) => <Activity {...props} type="recreational"/>}
            />
            <Route
                exact
                path={`${props.match.url}/cooking`}
                render={(props) => <Activity {...props} type="cooking"/>}
            />
            <Route
                exact
                path={`${props.match.path}`}
                render={(props) => (
                    <div className="card">
                        <div><Link to={`${props.match.path}/recreational`}>Recreational</Link></div>
                        <div><Link to={`${props.match.path}/cooking`}>Cooking</Link></div>
                    </div>
                )}
            />
        </div>
    )
}

export default Activities;
