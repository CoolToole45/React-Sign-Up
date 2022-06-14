import React from 'react';
import '../Styles/Form.css'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm: "",
            comment: "",
            newsletter: false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        validateInput();
    }

    function validateInput() {
        if(formData.password === formData.confirm) {
            console.log(formData);
            alert("Data successfully sent!");
        } else {
            alert("Passwords don't match!");
        }
    }

    return (
        <form id='main-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                name='firstName'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
            />

            <input 
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
            />

            <input 
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />

            <input 
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
            />

            <input 
                type='password'
                name='confirm'
                placeholder='Confirm Password'
                value={formData.confirm}
                onChange={handleChange}
            />

            <textarea 
                name='comment'
                placeholder='Leave your comment here(400char max)'
                value={formData.comment}
                onChange={handleChange}
                rows='8'
                maxLength='400'
            />

            <label htmlFor='newsletter'>Subscribe to our newsletter?</label>
            <input 
                type='checkbox'
                name='newsletter'
                id='newsletter'
                value={formData.newsletter}
                onChange={handleChange}
            />
            <br/>         

            <button id='submit-btn'>Submit Form</button>
        </form>
    )
}