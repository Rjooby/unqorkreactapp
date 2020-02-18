import React, { useState } from 'react';

const Settings = (props) => {
    const { userInfo, setInfo } = props;

    const {
        firstName, lastName, email
    } = userInfo;

    const [formValues, setFormValues] = useState({
        firstName: null,
        lastName: null,
        email: null,
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo(formValues);
    }

    const handleChange = (e) => {
        const newState = {
            ...formValues,
            [e.target.name]: e.target.value,
        }

        setFormValues(newState);
    }

    return (
        <div className="card">
            <h3>User Settings</h3>
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="firstNameInput">First Name</label>
                    <input
                        id="firstNameInput"
                        type="text"
                        name="firstName"
                        placeholder={firstName}
                        aria-label="First Name"
                        onChange={handleChange}
                    />

                <label htmlFor="lastNameInput">Last Name</label>
                <input
                        id="lastNameInput"
                        type="text"
                        name="lastName"
                        placeholder={lastName}
                        aria-label="Last Name"
                        onChange={handleChange}
                    />

                <label htmlFor="emailInput">Email</label>
                <input
                        label="emailInput"
                        type="email"
                        name="email"
                        placeholder={email}
                        aria-label="Email"
                        onChange={handleChange}
                    />

                <label htmlFor="submit">
                    <input type="submit" name="submit" value="Save"/>
                </label>
            </form>
        </div>
    )


}

export default Settings;
