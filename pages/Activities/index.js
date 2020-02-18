import React from 'react';
import { Route } from 'react-router-dom';
import {Activity} from "./Activity";

const Activities = (props) => {
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
        </div>
    )
}

export default Activities;
