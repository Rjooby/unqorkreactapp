import React, { useState, useEffect } from 'react';
import './Activities.css';

import { capitalize } from "../../utils/helperFunctions";
import ActivityCard from './ActivityCard'

const Activity = (props) => {
    const {
        type
    } = props;

    const [currentActivity, setActivity] = useState(null);

    useEffect(() => {
        const displayType = capitalize(type);
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

export default Activity;
