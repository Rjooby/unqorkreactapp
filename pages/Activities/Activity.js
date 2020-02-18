import React, { useState, useEffect } from 'react';
import './Activities.css';

import { capitalize } from "../../utils/helperFunctions";
import ActivityCard from './ActivityCard'

const Activity = (props) => {
    const {
        type
    } = props;

    const [currentActivity, setActivity] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        const displayType = capitalize(type);
        document.title = `${displayType} Activities`
        fetchData();

    }, [type])

    const fetchData = () => {
        let loadingTimer = setTimeout(() => setLoading(true), 150);

        let url = `https://www.boredapi.com/api/activity`;
        if (type) {
            url += `?type=${type}`;
        }

        fetch(url)
            .then((res) => (res.json()))
            .then((res) => {
                clearTimeout(loadingTimer);
                setLoading(false);
                setActivity(res);
            })
            .catch((err) => {
                setError(true)
            })
    }

    const onRefresh = () => {
        fetchData();
    }

    if (hasError) {
        return (
            <div className="card">
                <h3>Something went wrong, activity not found</h3>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="card">
                Loading...
            </div>
        )
    }

    //  Show nothing if api call takes less than 100ms to prevent render flashing
    if (!currentActivity) {
        return null;
    }

    return (
        <div className="activity">
            <ActivityCard
                loading={isLoading}
                {...currentActivity}
            />
            <button onClick={onRefresh}>Find a new activity</button>
        </div>
    )

}

export default Activity;
