import React, { useState, useEffect } from 'react';
import './Activities.css';

import { capitalize } from "../../utils/helperFunctions";
import ActivityCard from './ActivityCard'

export const Activity = (props) => {

    const {
        type
    } = props;

    const [currentActivity, setActivity] = useState(null);

    useEffect(() => {
        const displayType = type.slice(0,1).toUpperCase() + type.slice(1);
        document.title = `${displayType} Activities`
        fetchData();

    }, [type])

    const fetchData = () => {
        let url = `https://www.boredapi.com/api/activity`;
        if (type) {
            url += `?type=${type}`;
        }

        fetch(url)
            .then((res) => (res.json()))
            .then((res) => {
                setActivity(res);
            })
    }

    const onRefresh = () => {
        fetchData();
    }


    const renderActivity = () => {
        const { activity, type, participants } = currentActivity;

        return(
            <React.Fragment>
                <h2>{capitalize(type)} Activity</h2>
                <div>{activity}</div>
                <div>{`${participants} participant${participants === 1 ? '' : 's'}`}</div>

                <button onClick={onRefresh}>Find new Activity</button>
            </React.Fragment>
        )
    }

    const renderLoading = () => {
        return(
            <div className="loading">
                Loading
            </div>
        )
    }

    return (
        <div className="activity">
            <ActivityCard
                {...currentActivity}
            />
            <button onClick={onRefresh}>Find a new activity</button>
        </div>
    )

}
