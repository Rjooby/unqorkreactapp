import React from 'react';
import {capitalize} from "../../utils/helperFunctions";


const ActivityCard = (props) => {
    const {
        activity,
        type,
        participants
    } = props;

    if (!activity) {
        return (
            <div className="card">
                <h3>Activity not Found</h3>
            </div>
        )
    }

    return (
        <div className="card">
            <h3>{capitalize(type)} Activity</h3>
            <div>{activity}</div>
            <div>{`${participants} participant${participants === 1 ? '' : 's'}`}</div>
        </div>
    )
}

export default ActivityCard;
