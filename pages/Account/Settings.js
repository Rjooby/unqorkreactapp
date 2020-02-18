import React, { useState } from 'react';

const Settings = (props) => {
    const { userInfo, setInfo, history } = props;
    const {
        firstName, lastName, email
    } = userInfo;

    const [formValues, setFormValues] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo(formValues);
        history.push('/account/profile');
    }

    const handleChange = (e) => {
        const newState = {
            ...formValues,
            [e.target.name]: e.target.value,
        }

        setFormValues(newState);
    }

    //  TODO: Refactor inputs to use custom wrapper to prevent changing uncontrolled nature of base inputs
    return (
        <div className="card">
            <h3>User Settings</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="firstNameInput">First Name</label>
                <input
                    id="firstNameInput"
                    type="text"
                    name="firstName"
                    aria-label="First Name"
                    onChange={handleChange}
                    value={formValues.firstName}
                />

                <label htmlFor="lastNameInput">Last Name</label>
                <input
                    id="lastNameInput"
                    type="text"
                    name="lastName"
                    aria-label="Last Name"
                    onChange={handleChange}
                    value={formValues.lastName}
                />

                <label htmlFor="emailInput">Email</label>
                <input
                    label="emailInput"
                    type="email"
                    name="email"
                    aria-label="Email"
                    onChange={handleChange}
                    value={formValues.email}
                />

                <label htmlFor="submit">
                    <input className="submit-button" type="submit" name="submit" value="Save"/>
                </label>
            </form>
        </div>
    )
}

export default Settings;
